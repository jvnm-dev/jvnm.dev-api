import React, { Fragment, useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Experience } from '../'

const EXPERIENCES = gql`
  {
    experiences {
      image,
      place,
      dateFrom,
      dateTo,
      role,
    }
  }
`

export const Experiences = () => {
    const {loading, error, data} = useQuery(EXPERIENCES);
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        if (!loading) {
            if (error) {
              console.log('EXPERIENCES ERROR: ', error)
            }

            setExperiences(data.experiences ?? [])
          }
    }, [loading, error, data])

    return (
        <Fragment>
            {experiences.map(experience => (
                <Experience
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