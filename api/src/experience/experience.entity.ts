import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'
import { JourneyEntity } from '../journey/journey.entity'

@Entity('experience')
@ObjectType()
export class ExperienceEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column({ nullable: true })
    @Field({ nullable: true })
    image: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    place: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    dateFrom: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    dateTo: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    role: string

    @OneToOne(() => JourneyEntity, (journey) => journey.experience)
    @Field((type) => Int, { nullable: true })
    journey: JourneyEntity
}
