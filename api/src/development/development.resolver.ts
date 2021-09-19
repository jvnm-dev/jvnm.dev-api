import { Resolver, Query } from '@nestjs/graphql'
import { DevelopmentEntity } from './development.entity'
import { DevelopmentService } from './development.service'

@Resolver((of) => DevelopmentEntity)
export class DevelopmentResolver {
    constructor(private developmentService: DevelopmentService) {}

    @Query((returns) => [DevelopmentEntity])
    async developments(): Promise<DevelopmentEntity[]> {
        return this.developmentService.findAll()
    }
}
