import { Controller, Post, Param, Res, Get, Body } from '@nestjs/common'
import { UrlService } from './url.service'

@Controller('u')
export class UrlController {
    constructor(private urlService: UrlService) {}

    @Get(':shortcut')
    async redirect(@Param() params, @Res() res): Promise<void> {
        try {
            const shortcut = params.shortcut
            const url = await this.urlService.find(shortcut)
            if (url) {
                res.redirect(url.original)
                return
            }

            res.status(404).json('Not found')
        } catch (err) {
            res.status(400).json(err)
        }
    }
}
