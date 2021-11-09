import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { JourneyEntity } from './journey.entity'
import { JourneyService } from './journey.service'

@Resolver((of) => JourneyEntity)
export class JourneyResolver {
    constructor(private journeyService: JourneyService) {}

    @Query((returns) => JourneyEntity)
    async journey(
        @Args('id', { type: () => Int }) id: number
    ): Promise<JourneyEntity> {
        return this.journeyService.findById(id)
    }
}
