import { gql } from '../config/deps.ts'

export const experienceSchema = gql`
    type Experience {
        id: ID
        image: String
        place: String
        datefrom: String
        dateto: String
        role: String
    }
`
