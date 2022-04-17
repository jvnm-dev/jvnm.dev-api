import { Repository } from 'typeorm'
import { sign } from 'jsonwebtoken'
import { InjectRepository } from '@nestjs/typeorm'
import { HttpException, HttpStatus } from '@nestjs/common'

import { UserEntity } from './user.entity'
import { UserLoginDto } from './dto/user-login.dto'
import { EmailService } from '../email/email.service'
import { Config } from '../config'

export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private emailService: EmailService
    ) {}

    async find(email: string): Promise<UserEntity> {
        return this.userRepository.findOne({ where: { email } })
    }

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find()
    }

    async login({ email, source }: UserLoginDto): Promise<string> {
        if (!(email ?? '').length) {
            throw new HttpException('Bad data', HttpStatus.BAD_REQUEST)
        }

        let user = await this.userRepository.findOne({
            where: {
                email,
            },
        })

        if (user) {
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
                    source: encodeURIComponent(
                        Config.getInstance().get(source ?? 'FRONTEND_URL')
                    ),
                }
            )

            return HttpStatus.OK.toString()
        }

        throw new HttpException(
            'You are not allowed to sign in here',
            HttpStatus.FORBIDDEN
        )
    }

    async authenticate(email: string, otp: string): Promise<string> {
        if (!(email ?? '').length || !(otp ?? '').length) {
            throw new HttpException('Bad data', HttpStatus.BAD_REQUEST)
        }

        const user = await this.userRepository.findOne({ where: { email } })

        if (!user) {
            throw new HttpException('Unknown email', HttpStatus.BAD_REQUEST)
        }

        if (user.otp !== otp) {
            throw new HttpException('Bad OTP', HttpStatus.BAD_REQUEST)
        }

        user.otp = null

        const token = (user.token = await sign(
            { email },
            Config.getInstance().get('SECRET'),
            {
                algorithm: 'HS512',
            }
        ))

        await this.userRepository.save(user)

        return token
    }
}
