import { AvailabilityMutations, AvailabilityQueries } from './availability.ts'
import { ExperienceQueries } from './experience.ts'
import { TechnologyQueries } from './technology.ts'
import { UserMutations } from './user.ts'

export const resolvers = {
    Query: {
        ...AvailabilityQueries,
        ...ExperienceQueries,
        ...TechnologyQueries,
    },

    Mutation: {
        ...UserMutations,
        ...AvailabilityMutations,
    },
}
