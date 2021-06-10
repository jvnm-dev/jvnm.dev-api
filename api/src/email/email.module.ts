import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { EmailService } from './email.service'

@Module({
    imports: [],
    providers: [EmailService],
    controllers: [],
})
export class EmailModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {}
}
