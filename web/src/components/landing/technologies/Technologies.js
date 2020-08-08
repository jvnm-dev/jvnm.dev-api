import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useSelector, useDispatch } from 'react-redux'

import { Loader } from '../../common'
import { Technology, TechnologiesContainer } from '../'
import { setTechnologies } from '../../../redux/slices/technologies'

export const TECHNOLOGIES = gql`
  {
    technologies {
        id,
        image,
        name,
    }
  }
`

export const Technologies = () => {
    const dispatch = useDispatch()
    const {loading, error, data} = useQuery(TECHNOLOGIES)
    const technologies = useSelector(({ technologies }) => technologies)

    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error('TECHNOLOGIES ERROR: ', error)
            }

            dispatch(setTechnologies(data?.technologies ?? []))
        }
    }, [loading, error, data, dispatch])

    if (loading) {
        return <Loader />
    }

    return (
        <TechnologiesContainer>
            {technologies.map(technology => (
                <Technology
                    key={`tech-${technology.id}`}
                    image={technology.image}
                    name={technology.name}
                />
            ))}
        </TechnologiesContainer>
    )
}
