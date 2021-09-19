import { Controller, Get, Param, Res } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Get(':email/:otp/:source')
    async authenticate(@Param() params, @Res() res): Promise<void> {
        try {
            const token = await this.userService.authenticate(
                params.email,
                params.otp
            )
            res.redirect(
                `${decodeURIComponent(params.source)}/authenticate/${token}`
            )
        } catch (err) {
            throw err
        }
    }
}
