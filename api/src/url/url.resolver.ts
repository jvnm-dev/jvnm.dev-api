import { Mutation, Resolver, Args, Query } from '@nestjs/graphql'
import { UrlEntity } from './url.entity'
import { UrlService } from './url.service'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../user/auth.guard'

@Resolver((of) => UrlEntity)
export class UrlResolver {
    constructor(private readonly urlService: UrlService) {}

    @Mutation((returns) => UrlEntity)
    @UseGuards(new AuthGuard())
    async shorten(@Args('original') original: string) {
        return this.urlService.create(original)
    }

    @Query((returns) => [UrlEntity])
    @UseGuards(new AuthGuard())
    urls() {
        return this.urlService.findAll()
    }

    @Query((returns) => UrlEntity)
    url(@Args('shortcut') shortcut: string) {
        return this.urlService.find(shortcut)
    }
}
