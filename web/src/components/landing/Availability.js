import React from 'react'

import {
  AvailabilityContainer,
  AvailabilityImage,
  AvailabilityText
} from './'

export const Availability = () => {
  return (
    <AvailabilityContainer>
      <AvailabilityImage />
      <AvailabilityText>
        <span>Available</span> for charity organization project
      </AvailabilityText>
    </AvailabilityContainer>
  )
}