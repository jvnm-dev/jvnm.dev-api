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

    async update(newExperience: Partial<ExperienceEntity>) {
        const experience = await this.experienceRepository.findOne(
            newExperience.id,
            {
                relations: ['journey'],
            }
        )

        Object.entries(newExperience).forEach(([key, value]) => {
            experience[key] = value
        })

        await this.experienceRepository.save(experience)

        return experience
    }
}
