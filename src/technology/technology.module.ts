import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TechnologyEntity } from './technology.entity'
import { TechnologyService } from './technology.service'
import { TechnologyResolver } from './technology.resolver'

@Module({
    imports: [TypeOrmModule.forFeature([TechnologyEntity])],
    providers: [TechnologyService, TechnologyResolver],
    controllers: [],
})
export class TechnologyModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {}
}
