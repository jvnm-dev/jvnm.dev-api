import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'

@Entity('technology')
@ObjectType()
export class TechnologyEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column({ nullable: true })
    @Field({ nullable: true })
    image: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    name: string
}
