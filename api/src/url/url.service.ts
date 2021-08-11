import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'
import { UrlEntity } from './url.entity'

export class UrlService {
    constructor(
        @InjectRepository(UrlEntity)
        private readonly urlRepository: Repository<UrlEntity>
    ) {}

    async find(shortcut: string): Promise<UrlEntity> {
        return this.urlRepository.findOne({
            where: { shortcut },
        })
    }

    async findAll(): Promise<UrlEntity[]> {
        return this.urlRepository.find()
    }

    async create(original?: string): Promise<UrlEntity> {
        if (!original || original.length < 25) {
            throw new Error('URL too short')
        }

        const shortcut = this.generateShortcutUrl()

        const urlEntity = this.urlRepository.create({
            original,
            shortcut,
        })

        return this.urlRepository.save(urlEntity)
    }

    generateShortcutUrl(): string {
        let result = ''
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

        for (var i = 0; i < 5; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            )
        }

        return result
    }
}
