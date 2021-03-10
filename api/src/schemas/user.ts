import { gql } from '../config/deps.ts'

export const userSchema = gql`
    type User {
        id: ID
        email: String
        password: String
    }
`
