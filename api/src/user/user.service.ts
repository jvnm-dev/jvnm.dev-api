import { Repository } from 'typeorm'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { InjectRepository } from '@nestjs/typeorm'

import { UserEntity } from './user.entity'
import { UserLoginDto } from './dto/user-login.dto'
import { SECRET } from '../config'
import {EmailService} from '../email/email.service'
import {HttpException, HttpStatus} from '@nestjs/common'

export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private emailService: EmailService,
    ) {}

    async find(email: string): Promise<UserEntity> {
        return this.userRepository.findOne({ email })
    }

    async login({ email }: UserLoginDto): Promise<string> {
        if (!(email ?? '').length) {
            return HttpStatus.BAD_REQUEST.toString()
        }

        let user = await this.userRepository.findOne({
            where: {
                email,
            },
        })

        if (!user) {
            user = this.userRepository.create()
            user.email = email
        }


        user.otp = Math.random().toString(36).substring(2)
        user = await this.userRepository.save(user)
        
        await this.emailService.send(
          'AuthenticationTemplate',
          {
              email,
          },
          {
              email,
              otp: user.otp,
          }
        )

        return HttpStatus.OK.toString()
    }

    async authenticate(email: string, otp: string): Promise<string> {
        if (!(email ?? '').length || !(otp ?? '').length) {
            return HttpStatus.BAD_REQUEST.toString()
        }

        const user = await this.userRepository.findOne({ email })

        if (!user) {
            throw new HttpException('Unknown email', HttpStatus.BAD_REQUEST)
        }

        if (user.otp !== otp) {
            throw new HttpException('Bad OTP', HttpStatus.BAD_REQUEST)
        }

        user.otp = null

        const token = (user.token = await sign({ email }, SECRET, {
            algorithm: 'HS512',
        }))

        await this.userRepository.save(user)

        return token
    }
}
