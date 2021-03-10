import { Repository } from '../config/db.ts'

const technologiesRepository = new Repository('technologies')

export const TechnologyQueries = {
    technologies: async () => technologiesRepository.findAll(),
}

export const TechnologyMutations = {}
