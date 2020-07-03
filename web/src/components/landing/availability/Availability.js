import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useSelector, useDispatch } from 'react-redux'

import {
  AvailabilityContainer,
  AvailabilityImage,
  AvailabilityText
} from '../'
import { AVAILABILITIES } from '../../../constants'
import { setAvailability } from '../../../redux/slices/availability'

export const LAST_AVAILABILITY = gql`
  {
    lastAvailability {
      status
    }
  }
`

export const Availability = () => {
  const dispatch = useDispatch()
  const {loading, error, data} = useQuery(LAST_AVAILABILITY)
  const availability = useSelector(({ availability }) => availability)

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.log('AVAILABILITY ERROR: ', error)
      }

      const loadedStatus = data?.lastAvailability?.status

      const statusTexts = {
        [AVAILABILITIES.available]: 'Available',
        [AVAILABILITIES.partially_available]: 'Partially available',
        [AVAILABILITIES.not_available]: 'Not available'
      }

      if (loadedStatus) {
        dispatch(setAvailability({
          status: loadedStatus,
          statusText: statusTexts[loadedStatus],
        }))
      }
    }
  }, [data, error, loading, dispatch])

  return (
    <AvailabilityContainer>
      <AvailabilityImage
        status={availability.status}
        loading={loading}
      />
      <AvailabilityText>
        <span>{availability.statusText}</span> for charity organization project
      </AvailabilityText>
    </AvailabilityContainer>
  )
}
