import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { HealthEntity } from './health.entity'
import { HealthService } from './health.service'
import { UpdateHealthDTO } from './dto/updateHealth'
import { AuthGuard } from '../user/auth.guard'

@Resolver((of) => HealthEntity)
export class HealthResolver {
    constructor(private healthService: HealthService) {}

    @Query((returns) => HealthEntity)
    async health(): Promise<HealthEntity> {
        return this.healthService.find()
    }

    @Mutation((returns) => HealthEntity)
    @UseGuards(new AuthGuard())
    async updateHealth(
        @Args('health') health: UpdateHealthDTO
    ): Promise<HealthEntity> {
        return this.healthService.update(health)
    }
}
