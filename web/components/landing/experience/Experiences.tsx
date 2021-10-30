import React, { Fragment, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from '../../common'
import { Experience, ExperienceImage } from '../'
import {
    IExperienceReducer,
    setExperiences,
} from '../../../redux/slices/experiences'
import { IExperience } from './Experience'

export const EXPERIENCES = gql`
    {
        experiences {
            id
            image
            place
            dateFrom
            dateTo
            role
            journey {
                id
            }
        }
    }
`

interface IProps {
    dashboard?: boolean
}

export const Experiences = ({ dashboard }: IProps) => {
    const dispatch = useDispatch()
    const { loading, error, data } = useQuery(EXPERIENCES)
    const experiences = useSelector(
        ({ experiences }: IExperienceReducer) => experiences
    )

    const onExperienceClick = (journeyId: number) => {
        // history.push(`/journey/${journeyId}`)
    }

    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error(`EXPERIENCES ERROR: ${error.message}`)
            }

            const experiences = data?.experiences ?? []
            dispatch(
                setExperiences([...experiences].sort((a, b) => b.id - a.id))
            )
        }
    }, [loading, error, data, dispatch])

    if (loading) {
        return <Loader />
    }

    return (
        <Fragment>
            {experiences.map(
                ({
                    id,
                    image,
                    place,
                    dateFrom,
                    dateTo,
                    role,
                    journey,
                }: Partial<IExperience>) =>
                    !dashboard ? (
                        <Experience
                            key={`exp-${id}`}
                            image={image}
                            place={place}
                            // @ts-ignore
                            dateFrom={dateFrom}
                            // @ts-ignore
                            dateTo={dateTo}
                            title={role}
                            // @ts-ignore
                            //onClick={() => onExperienceClick(journey.id)}
                        />
                    ) : (
                        <ExperienceImage key={id} src={image} alt={place} />
                    )
            )}
        </Fragment>
    )
}
