import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DevelopmentEntity } from './development.entity'
import { DevelopmentService } from './development.service'
import { DevelopmentResolver } from './development.resolver'

// Used for laboratory
@Module({
    imports: [TypeOrmModule.forFeature([DevelopmentEntity])],
    providers: [DevelopmentService, DevelopmentResolver],
    controllers: [],
})
export class DevelopmentModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {}
}
