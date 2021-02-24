import { AvailabilityQueries, AvailabilityMutations } from './availability.ts'
import { ExperienceQueries, ExperienceMutations } from './experience.ts'
import { TechnologyQueries, TechnologyMutations } from './technology.ts'

export const resolvers = {
    Query: {
        ...AvailabilityQueries,
        ...ExperienceQueries,
        ...TechnologyQueries,
    },
    /*
    Mutation: {
        ...AvailabilityMutations,
        ...ExperienceMutations,
        ...TechnologyMutations,
    }*/
}
