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
}
