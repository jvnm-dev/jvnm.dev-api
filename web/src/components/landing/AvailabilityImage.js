import React from 'react'
import styled from 'styled-components'

import me from '../../assets/img/me.jpg'

const AvailabilityImageContainer = styled.div`
  position: relative;
`

const Image = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
`

const AvailabilityIndicator = styled.span`
  position: absolute;
  bottom: 5px;
  right: 0;
  height: 14px;
  width: 14px;
  background-color: green;
  border: 2px solid #FFF;
  border-radius: 50%;
`

export const AvailabilityImage = () => {
  return (
    <AvailabilityImageContainer>
      <Image src={me} alt="Jason Van Malder" />
      <AvailabilityIndicator />
    </AvailabilityImageContainer>
  )
}