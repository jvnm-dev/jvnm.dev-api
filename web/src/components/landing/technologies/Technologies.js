import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Technology, TechnologiesContainer } from '../'

const TECHNOLOGIES = gql`
  {
    technologies {
        id,
        image,
        name,
    }
  }
`

export const Technologies = () => {
    const {loading, error, data} = useQuery(TECHNOLOGIES);
    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        if (!loading) {
            if (error) {
              console.log('TECHNOLOGIES ERROR: ', error)
            }

            setTechnologies(data?.technologies ?? [])
        }
    }, [loading, error, data])

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