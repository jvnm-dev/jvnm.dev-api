import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'

export enum HealthStatus {
    maintenance,
    available,
}

@Entity('health')
@ObjectType()
export class HealthEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column({ default: HealthStatus.available })
    @Field((type) => Int)
    web: HealthStatus
}
