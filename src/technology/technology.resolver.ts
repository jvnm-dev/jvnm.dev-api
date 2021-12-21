import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TechnologyEntity } from './technology.entity'
import { TechnologyService } from './technology.service'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../user/auth.guard'

@Resolver((of) => TechnologyEntity)
export class TechnologyResolver {
    constructor(private technologyService: TechnologyService) {}

    @Query((returns) => [TechnologyEntity])
    async technologies(): Promise<TechnologyEntity[]> {
        return this.technologyService.findAll()
    }

    @Mutation((returns) => TechnologyEntity)
    @UseGuards(new AuthGuard())
    async updateTechnology(
        @Args('technology') technologyJSON: String
    ): Promise<TechnologyEntity> {
        return this.technologyService.update(
            JSON.parse(technologyJSON as string)
        )
    }
}
