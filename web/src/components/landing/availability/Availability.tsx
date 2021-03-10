import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useSelector, useDispatch } from 'react-redux'

import { AvailabilityContainer, AvailabilityImage, AvailabilityText } from '../'
import { STATUS_TEXTS } from '../../../constants'
import {
    IAvailabilityReducer,
    setAvailability,
} from '../../../redux/slices/availability'

export const LAST_AVAILABILITY = gql`
    {
        availability {
            id
            status
        }
    }
`

export const Availability = () => {
    const dispatch = useDispatch()
    const { loading, error, data } = useQuery(LAST_AVAILABILITY)
    const availability = useSelector(
        ({ availability }: IAvailabilityReducer) => availability
    )

    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error(`AVAILABILITY ERROR: ${error.message}`)
            }

            const loadedStatus = parseInt(data?.availability?.status ?? '0')

            if (loadedStatus) {
                dispatch(
                    setAvailability({
                        status: loadedStatus,
                        statusText: STATUS_TEXTS[loadedStatus],
                    })
                )
            }
        }
    }, [data, error, loading, dispatch])

    return (
        <AvailabilityContainer>
            <AvailabilityImage status={availability.status} />
            <AvailabilityText>
                <span>{availability.statusText}</span> for charity organization
                project
            </AvailabilityText>
        </AvailabilityContainer>
    )
}
