import {Repository} from '../config/db.ts'

const experiencesRepository = new Repository('experiences')

export const ExperienceQueries = {
    experiences: async () => experiencesRepository.findAll(),
}

export const ExperienceMutations = {}
