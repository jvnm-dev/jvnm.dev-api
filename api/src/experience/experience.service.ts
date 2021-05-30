import { InjectRepository } from '@nestjs/typeorm'
import { ExperienceEntity } from './experience.entity'
import { Repository } from 'typeorm'

export class ExperienceService {
    constructor(
        @InjectRepository(ExperienceEntity)
        private readonly experienceRepository: Repository<ExperienceEntity>
    ) {}

    async findAll(): Promise<ExperienceEntity[]> {
        return this.experienceRepository.find({ relations: ['journey'] })
    }
}
