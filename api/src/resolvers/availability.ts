import { db } from '../config/db.ts'

export const AvailabilityQueries = {
    availability: async () => db.instance.findFirst('availabilities'),
}

export const AvailabilityMutations = {}
