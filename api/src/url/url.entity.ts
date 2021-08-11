import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'

@Entity('url')
@ObjectType()
export class UrlEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column({ nullable: true })
    @Field({ nullable: true })
    original: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    shortcut: string
}
