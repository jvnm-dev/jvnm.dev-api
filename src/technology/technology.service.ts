import { Repository } from 'typeorm'
import { TechnologyEntity } from './technology.entity'
import { InjectRepository } from '@nestjs/typeorm'

export class TechnologyService {
    constructor(
        @InjectRepository(TechnologyEntity)
        private readonly technologyRepository: Repository<TechnologyEntity>
    ) {}

    async findAll(): Promise<TechnologyEntity[]> {
        return this.technologyRepository.find()
    }

    async update(newTechnology: Partial<TechnologyEntity>) {
        const technology = await this.technologyRepository.findOne(
            newTechnology.id
        )

        Object.entries(newTechnology).forEach(([key, value]) => {
            technology[key] = value
        })

        await this.technologyRepository.save(technology)

        return technology
    }
}
