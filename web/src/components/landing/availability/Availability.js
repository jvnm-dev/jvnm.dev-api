import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import {
  AvailabilityContainer,
  AvailabilityImage,
  AvailabilityText
} from '../'
import { AVAILABILITIES } from '../../../constants'

export const LAST_AVAILABILITY = gql`
  {
    lastAvailability {
      status
    }
  }
`

export const Availability = () => {
  const {loading, error, data} = useQuery(LAST_AVAILABILITY);
  const [status, setStatus] = useState(AVAILABILITIES.loading)
  const [statusText, setStatusText] = useState('Maybe available')

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
        setStatus(loadedStatus)
        setStatusText(statusTexts[loadedStatus])
      }
    }
  }, [data, error, loading])

  return (
    <AvailabilityContainer>
      <AvailabilityImage
        status={status}
        loading={loading}
      />
      <AvailabilityText>
        <span>{statusText}</span> for charity organization project
      </AvailabilityText>
    </AvailabilityContainer>
  )
}
