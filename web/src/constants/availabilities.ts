export interface IAvailabilityKeys {
    loading: number,
    available: number,
    partially_available: number,
    not_available: number,
}

export const AVAILABILITIES = {
    loading: 0,
    available: 1,
    partially_available: 2,
    not_available: 3,
}

export const STATUS_TEXTS = {
    [AVAILABILITIES.available]: 'Available',
    [AVAILABILITIES.partially_available]: 'Partially available',
    [AVAILABILITIES.not_available]: 'Not available'
}