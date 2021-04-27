import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { verify } from 'jsonwebtoken'
import { SECRET } from '../config'

@Injectable()
export class AuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context).getContext()
        ctx.user = await this.validateToken(ctx.headers.authorization)
        return true
    }

    async validateToken(auth: string) {
        const authParts = auth?.split(' ') ?? []

        if (!authParts.length || authParts[0] !== 'Bearer') {
            this.invalidTokenError()
        }

        const token = authParts[1]

        try {
            return await verify(token, SECRET)
        } catch (err) {
            this.invalidTokenError()
        }
    }

    invalidTokenError() {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
    }
}
