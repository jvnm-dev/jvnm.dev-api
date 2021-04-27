import {Controller, Get, Param, Res} from '@nestjs/common'
import {UserService} from './user.service'
import {FRONTEND_URL} from '../config'

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Get(':email/:otp')
  async authenticate(@Param() params, @Res() res): Promise<void> {
    try {
      const token = await this.userService.authenticate(params.email, params.otp)
      res.redirect(`${FRONTEND_URL}/#/authenticate/${token}`)
    } catch (err) {
      throw err
    }
  }
}