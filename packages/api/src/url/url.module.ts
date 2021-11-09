import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UrlService } from './url.service'
import { UrlEntity } from './url.entity'
import { UrlController } from './url.controller'
import { UrlResolver } from './url.resolver'

@Module({
    imports: [TypeOrmModule.forFeature([UrlEntity])],
    providers: [UrlService, UrlResolver],
    controllers: [UrlController],
})
export class UrlModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {}
}
