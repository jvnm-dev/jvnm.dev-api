import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { Loader } from '../../common'
import { setAvailability } from '../../../redux/slices/availability'
import { AVAILABILITIES, STATUS_TEXTS } from '../../../constants'
import { LAST_AVAILABILITY } from '../../landing/availability/Availability'

const UPDATE_AVAILABILITY = gql`
  mutation UpdateAvailability ($id: ID!, $status: Int!) {
    updateAvailability (input:{
      id: $id,
      status: $status,
    }) {
      availability {
        id,
        status
      }
    }
  }
`

export const AvailabilitySelector = () => {
  const availability = useSelector(({ availability }) => availability)
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(LAST_AVAILABILITY)
  const [ updateAvailability ] = useMutation(UPDATE_AVAILABILITY)

  const handleChange = (e) => {
    const newValue = e.target.value

    updateAvailability({
      variables: {
        id: data?.availability?.id,
        status: newValue,
      }
    })

    dispatch(setAvailability({
      status: newValue,
      statusText: STATUS_TEXTS[newValue],
    }))
  }

  useEffect(() => {
    if (!loading) {
      if (error) {
        throw new Error('AvailabilitySelector: failed loading availabilities')
      }
    }
  }, [error, loading])

  if (loading) {
    return <Loader />
  }

  return (
    <select value={availability.status} onChange={handleChange}>
      {Object.keys(AVAILABILITIES).map((k, i) => (
        <option key={i} value={AVAILABILITIES[k]}>{k.replace('_', ' ')}</option>
      ))}
    </select>
  )
}
