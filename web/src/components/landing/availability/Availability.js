import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import {
  AvailabilityContainer,
  AvailabilityImage,
  AvailabilityText
} from '../'

const LAST_AVAILABILITY = gql`
  {
    lastAvailability {
      status
    }
  }
`

export const Availability = () => {
  const { loading, error, data } = useQuery(LAST_AVAILABILITY);

  useEffect(() => {
    if (error) {
      console.log('AVAILABILITY ERROR: ', error)
    }
  })

  return (
    <AvailabilityContainer>
      <AvailabilityImage
        status={(!loading && data.lastAvailability && data.lastAvailability.status) || 2}
        loading={loading}
      />
      <AvailabilityText>
        <span>Available</span> for charity organization project
      </AvailabilityText>
    </AvailabilityContainer>
  )
}