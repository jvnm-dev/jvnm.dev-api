import React from 'react'
import styled from 'styled-components'

import me from '../../../assets/img/me.jpg'
import { AVAILABILITIES } from '../../../constants'

const AvailabilityImageContainer = styled.div`
  position: relative;
`

const Image = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;

  @media only screen and (min-width: 1440px) {
    height: 64px;
    width: 64px;
  }
`

const AvailabilityIndicator = styled.span`
  position: absolute;
  bottom: 5px;
  right: 0;
  height: 10px;
  width: 10px;
  background-color: ${({status}) => (
    status === AVAILABILITIES.available ? '#6DC36D' :
    status === AVAILABILITIES.partially_available ? 'orange' :
    status === AVAILABILITIES.not_available ? '#CD2323' :
    'grey'
  )};
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: 50%;

  @media only screen and (min-width: 1440px) {
    height: 14px;
    width: 14px;
  }
`

export const AvailabilityImage = ({ status, loading }) => {
  return (
    <AvailabilityImageContainer>
      <Image src={me} alt="Jason Van Malder" />
      <AvailabilityIndicator status={status} />
    </AvailabilityImageContainer>
  )
}
