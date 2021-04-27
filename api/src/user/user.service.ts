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
        const user = await this.find(email)

        if (!user) {
            throw new HttpException('Unknown email', HttpStatus.BAD_REQUEST)
        }

        const otp = Math.random().toString(36).substring(2)
        user.otp = await bcrypt.hash(otp, 12)
        user.token = null

        await this.userRepository.save(user)

        await this.emailService.send('AuthenticationTemplate',
          {
              email,
            },
          {
              email,
              otp
          }
        )

        return HttpStatus.OK.toString()
    }

    async authenticate(email: string, otp: string): Promise<string> {
        const user = await this.userRepository.findOne({ email })

        if (!user) {
            throw new HttpException('Unknown email', HttpStatus.BAD_REQUEST)
        }

        const isOtpCorrect = await bcrypt.compare(
          otp,
          user.otp,
        )

        if (!isOtpCorrect) {
            throw new HttpException('Bad OTP', HttpStatus.BAD_REQUEST)
        }

        user.token = await sign({ email }, SECRET, { algorithm: 'HS512' })
        user.otp = null

        await this.userRepository.save(user)

        return user.token
    }
}
