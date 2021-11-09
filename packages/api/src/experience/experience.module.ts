import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExperienceEntity } from './experience.entity'
import { ExperienceService } from './experience.service'
import { ExperienceResolver } from './experience.resolver'

@Module({
    imports: [TypeOrmModule.forFeature([ExperienceEntity])],
    providers: [ExperienceService, ExperienceResolver],
    controllers: [],
})
export class ExperienceModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {}
}
