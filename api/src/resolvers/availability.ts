import {Repository} from '../config/db.ts'
import {IAvailability} from '../schemas/availability.ts'

export interface IAvailabilityUpdateInput {
    id: number,
    status: number,
}

const availabilitiesRepository = new Repository('availabilities')

export const AvailabilityQueries = {
    availability: async () => availabilitiesRepository.findFirst(),
}

export const AvailabilityMutations = {
    updateAvailability: async (_: any, { id, status }: IAvailabilityUpdateInput): Promise<IAvailability | null> => {
        try {
            await availabilitiesRepository.update(
                { status },
                `id = ${id}`
            )

            return availabilitiesRepository.findFirst(`id = ${id}`)
        } catch {
            return null
        }
    }
}
