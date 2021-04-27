import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JourneyService } from './journey.service'
import { JourneyResolver } from './journey.resolver'
import { JourneyEntity } from './journey.entity'

@Module({
    imports: [TypeOrmModule.forFeature([JourneyEntity])],
    providers: [JourneyService, JourneyResolver],
    controllers: [],
})
export class JourneyModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {}
}
