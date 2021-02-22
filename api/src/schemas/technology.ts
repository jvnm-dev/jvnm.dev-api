import {gql} from '../config/deps.ts'

export const technologySchema = gql`
    type Technology {
        id: ID
        image: String,
        name: String,
    }
`