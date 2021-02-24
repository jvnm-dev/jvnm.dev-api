import { availabilitySchema } from './availability.ts'
import { experienceSchema } from './experience.ts'
import { technologySchema } from './technology.ts'
import { gql } from '../config/deps.ts'

const schema = gql`
    type Query {
        availability: Availability
        experiences: [Experience]
        technologies: [Technology]
    }
`

export const schemas = [
    schema,
    availabilitySchema,
    experienceSchema,
    technologySchema,
]
