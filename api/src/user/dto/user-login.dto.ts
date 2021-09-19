import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserLoginDto {
    @Field()
    readonly email: string

    @Field({ nullable: true })
    readonly source?: string
}
