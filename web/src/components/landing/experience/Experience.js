import React from 'react'

import {
  ExperienceContainer,
  ExperienceImage,
  ExperienceInfo,
  ExperienceTitle,
  ExperienceDetails,
} from '../'

export const Experience = ({ image, place, from, to, title, margin }) => {
  return (
    <ExperienceContainer margin={margin}>
      <ExperienceImage src={image} alt={place} />
      <ExperienceDetails>
        <ExperienceInfo place={place} from={from} to={to} />
        <ExperienceTitle>{title}</ExperienceTitle>
      </ExperienceDetails>
    </ExperienceContainer>
  )
}