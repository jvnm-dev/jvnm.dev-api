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

export const Experience = ({ image, place, dateFrom, dateTo, title }: Partial<IExperience>) => {
    return (
        <ExperienceContainer>
            <ExperienceImage src={image} alt={place} />
            <ExperienceDetails>
                <ExperienceInfo place={place} dateFrom={dateFrom} dateTo={dateTo} />
                <ExperienceTitle>{title}</ExperienceTitle>
            </ExperienceDetails>
        </ExperienceContainer>
    )
}