import { Repository } from 'typeorm'
import { JourneyEntity } from './journey.entity'
import { InjectRepository } from '@nestjs/typeorm'

export class JourneyService {
    constructor(
        @InjectRepository(JourneyEntity)
        private journeyRepository: Repository<JourneyEntity>
    ) {}

    async findById(id: number) {
        return this.journeyRepository.findOne(
            { id },
            { relations: ['experience'] }
        )
    }
}
