import { Resolver, Query } from '@nestjs/graphql'
import { ExperienceEntity } from './experience.entity'
import { ExperienceService } from './experience.service'

@Resolver((of) => ExperienceEntity)
export class ExperienceResolver {
    constructor(private experienceService: ExperienceService) {}

    @Query((returns) => [ExperienceEntity])
    async experiences(): Promise<ExperienceEntity[]> {
        return this.experienceService.findAll()
    }
}
