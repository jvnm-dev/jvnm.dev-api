import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HealthResolver } from './health.resolver'
import { HealthService } from './health.service'
import { HealthEntity } from './health.entity'

@Module({
    imports: [TypeOrmModule.forFeature([HealthEntity])],
    providers: [HealthService, HealthResolver],
    controllers: [],
})
export class HealthModule implements NestModule {
    public configure(consumer: MiddlewareConsumer): void {}
}
