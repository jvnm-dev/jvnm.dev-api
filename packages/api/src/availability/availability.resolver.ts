import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { AvailabilityEntity, AvailabilityStatus } from './availability.entity'
import { AvailabilityService } from './availability.service'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../user/auth.guard'

@Resolver((of) => AvailabilityEntity)
export class AvailabilityResolver {
    constructor(private availabilityService: AvailabilityService) {}

    @Query((returns) => AvailabilityEntity)
    async availability(): Promise<AvailabilityEntity> {
        return this.availabilityService.find()
    }

    @Mutation((returns) => AvailabilityEntity)
    @UseGuards(new AuthGuard())
    async updateAvailability(
        @Args('status') status: AvailabilityStatus
    ): Promise<AvailabilityEntity> {
        return this.availabilityService.update(status)
    }
}
