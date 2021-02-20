import React from 'react'

import {
    ExperienceContainer,
    ExperienceImage,
    ExperienceInfo,
    ExperienceTitle,
    ExperienceDetails,
} from '../'

export interface IExperience {
    id: string,
    image: string,
    place: string,
    dateFrom: string,
    dateTo: string,
    title: string,
    margin: boolean,
    role: string,
}

export const Experience = ({ image, place, dateFrom, dateTo, title, margin }: IExperience) => {
    return (
        <ExperienceContainer margin={margin}>
            <ExperienceImage src={image} alt={place} />
            <ExperienceDetails>
                <ExperienceInfo place={place} from={dateFrom} to={dateTo} />
                <ExperienceTitle>{title}</ExperienceTitle>
            </ExperienceDetails>
        </ExperienceContainer>
    )
}