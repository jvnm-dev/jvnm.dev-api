import { Mutation, Resolver, Args, Query, Context } from '@nestjs/graphql'
import { UserEntity } from './user.entity'
import { UserService } from './user.service'
import { UserLoginDto } from './dto/user-login.dto'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from './auth.guard'

@Resolver((of) => UserEntity)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query((returns) => UserEntity)
    @UseGuards(new AuthGuard())
    me(@Context('user') user: UserEntity) {
        return user
    }

    @Mutation((returns) => String)
    async login(@Args('userData') userData: UserLoginDto) {
        return this.userService.login(userData)
    }
}
