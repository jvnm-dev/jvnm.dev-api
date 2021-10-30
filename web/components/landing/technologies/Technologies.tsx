import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import { useSelector, useDispatch } from 'react-redux'

import { Loader } from '../../common'
import { Technology, TechnologiesContainer } from '../'
import {
    ITechnologiesReducer,
    ITechnology,
    setTechnologies,
} from '../../../redux/slices/technologies'
import { TechnologyImage } from './Technology'

export const TECHNOLOGIES = gql`
    {
        technologies {
            id
            image
            name
        }
    }
`

interface IProps {
    dashboard?: boolean
}

export const Technologies = ({ dashboard }: IProps) => {
    const dispatch = useDispatch()
    const { loading, error, data } = useQuery(TECHNOLOGIES)
    const technologies = useSelector(
        ({ technologies }: ITechnologiesReducer) => technologies
    )

    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error(`TECHNOLOGIES ERROR: ${error.message}`)
            }

            const technologies = [...(data?.technologies ?? [])].sort(
                (a: ITechnology, b: ITechnology) => {
                    return parseInt(a.id) - parseInt(b.id)
                }
            )

            dispatch(setTechnologies(technologies))
        }
    }, [loading, error, data, dispatch])

    if (loading) {
        return <Loader />
    }

    return (
        <TechnologiesContainer>
            {technologies.map(({ id, image, name }: ITechnology) => (
                <Technology key={`tech-${id}`} image={image} name={name} />
            ))}
        </TechnologiesContainer>
    )
}
