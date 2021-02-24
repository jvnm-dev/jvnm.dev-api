import React, { Fragment, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from '../../common'
import { Experience } from '../'
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
            datefrom
            dateto
            role
        }
    }
`

export const Experiences = () => {
    const dispatch = useDispatch()
    const { loading, error, data } = useQuery(EXPERIENCES)
    const experiences = useSelector(
        ({ experiences }: IExperienceReducer) => experiences
    )

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
            {experiences.map((experience: Partial<IExperience>) => (
                <Experience
                    key={`exp-${experience.id}`}
                    image={experience.image}
                    place={experience.place}
                    dateFrom={experience.datefrom}
                    dateTo={experience.dateto}
                    title={experience.role}
                />
            ))}
        </Fragment>
    )
}
