import { db } from '../config/db.ts'

export const TechnologyQueries = {
    technologies: async () => db.instance.findAll('technologies'),
}

export const TechnologyMutations = {}
