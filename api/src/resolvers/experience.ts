import { db } from '../config/db.ts'

export const ExperienceQueries = {
    experiences: async () => db.instance.findAll('experiences'),
}

export const ExperienceMutations = {}
