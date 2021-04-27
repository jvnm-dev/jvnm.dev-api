import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AvailabilityEntity, AvailabilityStatus } from './availability.entity'

export class AvailabilityService {
    constructor(
        @InjectRepository(AvailabilityEntity)
        private readonly availabilityRepository: Repository<AvailabilityEntity>
    ) {}

    async find(): Promise<AvailabilityEntity> {
        return this.availabilityRepository.findOne()
    }

    async update(status: AvailabilityStatus): Promise<AvailabilityEntity> {
        const availability = await this.find()
        availability.status = status
        return this.availabilityRepository.save(availability)
    }
}
