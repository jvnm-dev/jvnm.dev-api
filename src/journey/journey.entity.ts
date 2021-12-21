import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'
import { ExperienceEntity } from '../experience/experience.entity'

@Entity('journey')
@ObjectType()
export class JourneyEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @OneToOne(() => ExperienceEntity, (experience) => experience.journey)
    @JoinColumn()
    @Field((type) => ExperienceEntity, { nullable: true })
    experience: ExperienceEntity

    @Column('text')
    @Field({ nullable: true })
    description: string
}
