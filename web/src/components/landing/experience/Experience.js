import React, { Fragment } from 'react'

import {
  ExperienceImage,
  ExperienceInfo,
  ExperienceTitle
} from '../'

export const Experience = ({ image, place, from, to, title }) => {
 return (
   <Fragment>
     <ExperienceImage src={image} alt={place} />
     <ExperienceInfo place={place} from={from} to={to} />
     <ExperienceTitle content={title} />
   </Fragment>
 )
}