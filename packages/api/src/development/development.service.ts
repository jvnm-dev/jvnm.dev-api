import { Repository } from 'typeorm'
import { DevelopmentEntity } from './development.entity'
import { InjectRepository } from '@nestjs/typeorm'

export class DevelopmentService {
    constructor(
        @InjectRepository(DevelopmentEntity)
        private readonly developmentRepository: Repository<DevelopmentEntity>
    ) {}

    async findAll(): Promise<DevelopmentEntity[]> {
        return this.developmentRepository.find()
    }
}
