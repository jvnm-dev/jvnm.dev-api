import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'

@Entity('user')
@ObjectType()
export class UserEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column({ nullable: true })
    @Field({ nullable: true })
    email: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    otp: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    token: string
}
