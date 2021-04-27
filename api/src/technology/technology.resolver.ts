import { Resolver, Query } from '@nestjs/graphql'
import { TechnologyEntity } from './technology.entity'
import { TechnologyService } from './technology.service'

@Resolver((of) => TechnologyEntity)
export class TechnologyResolver {
    constructor(private technologyService: TechnologyService) {}

    @Query((returns) => [TechnologyEntity])
    async technologies(): Promise<TechnologyEntity[]> {
        return this.technologyService.findAll()
    }
}
