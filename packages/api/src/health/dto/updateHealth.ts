import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateHealthDTO {
    @Field(() => Int, { nullable: true })
    web: number
}
