import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'

@Entity('development')
@ObjectType()
export class DevelopmentEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column({ nullable: true })
    @Field({ nullable: true })
    image: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    name: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    description: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    demoUrl: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    sourceCodeUrl: string
}
