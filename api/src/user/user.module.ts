import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import {EmailModule} from '../email/email.module'
import {EmailService} from '../email/email.service'
import {AuthController} from './auth.controller'

@Module({
    imports: [
      TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [UserService, UserResolver, EmailService],
    controllers: [AuthController],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {}
}
