import React, { Fragment, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useSelector, useDispatch } from 'react-redux'

import { Loader } from '../../common'
import { Experience } from '../'
import { setExperiences } from '../../../redux/slices/experiences'

export const EXPERIENCES = gql`
  {
    experiences {
        id,
        image,
        place,
        dateFrom,
        dateTo,
        role,
    }
  }
`

export const Experiences = () => {
    const dispatch = useDispatch()
    const {loading, error, data} = useQuery(EXPERIENCES);
    const experiences = useSelector(({ experiences }) => experiences)

    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error('EXPERIENCES ERROR: ', error)
            }

            const experiences = data?.experiences ?? []
            dispatch(setExperiences([...experiences].sort((a, b) => b.id - a.id)))
        }
    }, [loading, error, data, dispatch])

    if (loading) {
        return <Loader />
    }

    return (
        <Fragment>
            {experiences.map(experience => (
                <Experience
                    key={`exp-${experience.id}`}
                    image={experience.image}
                    place={experience.place}
                    from={experience.dateFrom}
                    to={experience.dateTo}
                    title={experience.role}
                />
            ))}
        </Fragment>
    )
}
