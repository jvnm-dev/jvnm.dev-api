import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { HealthEntity } from './health.entity'
import { UpdateHealthDTO } from './dto/updateHealth'

export class HealthService {
    constructor(
        @InjectRepository(HealthEntity)
        private readonly healthRepository: Repository<HealthEntity>
    ) {}

    async find(): Promise<HealthEntity> {
        return this.healthRepository.findOne()
    }

    async update(newHealth: UpdateHealthDTO): Promise<HealthEntity> {
        const health = await this.find()
        return this.healthRepository.save({ ...health, ...newHealth })
    }
}
