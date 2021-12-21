import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'

export enum AvailabilityStatus {
    loading,
    available,
    partially_available,
    not_available,
}

@Entity('availability')
@ObjectType()
export class AvailabilityEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column({ default: AvailabilityStatus.not_available })
    @Field((type) => Int)
    status: AvailabilityStatus
}
