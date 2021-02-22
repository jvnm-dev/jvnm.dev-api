import {gql} from '../config/deps.ts'

export const experienceSchema = gql`
    type Experience {
        id: ID
        image: String
        place: String
        dateFrom: String
        dateTo: String
        role: String
    }
`