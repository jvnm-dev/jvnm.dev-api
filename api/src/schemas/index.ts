import { availabilitySchema } from './availability.ts'
import { experienceSchema } from './experience.ts'
import { technologySchema } from './technology.ts'
import { gql } from '../config/deps.ts'
import {userSchema} from './user.ts'

const schema = gql`
    type Query {
        availability: Availability
        experiences: [Experience]
        technologies: [Technology]
    }
    
    type Mutation {
        login(email: String!, password: String!): String!
        
        updateAvailability(id: ID!, status: Int!): Availability
    }
`

export const schemas = [
    availabilitySchema,
    experienceSchema,
    technologySchema,
    userSchema,
    schema,
]
