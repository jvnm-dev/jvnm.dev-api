import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ExperienceEntity } from './experience.entity'
import { ExperienceService } from './experience.service'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../user/auth.guard'

@Resolver((of) => ExperienceEntity)
export class ExperienceResolver {
    constructor(private experienceService: ExperienceService) {}

    @Query((returns) => [ExperienceEntity])
    async experiences(): Promise<ExperienceEntity[]> {
        return this.experienceService.findAll()
    }

    @Mutation((returns) => ExperienceEntity)
    @UseGuards(new AuthGuard())
    async updateExperience(
        @Args('experience') experienceJSON: String
    ): Promise<ExperienceEntity> {
        return this.experienceService.update(
            JSON.parse(experienceJSON as string)
        )
    }
}
