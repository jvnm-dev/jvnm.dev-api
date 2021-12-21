import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AvailabilityResolver } from './availability.resolver'
import { AvailabilityService } from './availability.service'
import { AvailabilityEntity } from './availability.entity'

@Module({
    imports: [TypeOrmModule.forFeature([AvailabilityEntity])],
    providers: [AvailabilityService, AvailabilityResolver],
    controllers: [],
})
export class AvailabilityModule implements NestModule {
    public configure(consumer: MiddlewareConsumer): void {}
}
