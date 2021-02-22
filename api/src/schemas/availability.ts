import {gql} from '../config/deps.ts'

export const availabilitySchema = gql`
    type Availability {
        id: ID
        status: Int
    }
`