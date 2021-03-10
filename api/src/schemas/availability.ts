import { gql } from '../config/deps.ts'

export interface IAvailability {
    id: number,
    status: number,
}

export const availabilitySchema = gql`
    type Availability {
        id: ID
        status: Int
    }
`
