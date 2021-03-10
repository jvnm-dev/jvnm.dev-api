import React, { ChangeEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'

import {Loader, Section, Title} from '../../common'
import { setAvailability } from '../../../redux/slices/availability'
import { AVAILABILITIES, STATUS_TEXTS } from '../../../constants'
import { LAST_AVAILABILITY } from '../../landing/availability/Availability'
import { IAvailabilityKeys } from '../../../constants/availabilities'
import styled from 'styled-components'

const UPDATE_AVAILABILITY = gql`
    mutation UpdateAvailability($id: ID!, $status: Int!) {
        updateAvailability(id: $id, status: $status) {
            id
            status
        }
    }
`

const Select = styled.select`
  height: 40px;
  padding: 10px 40px 10px 10px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png") #eaeaea no-repeat 90% !important; /* !important used for overriding all other customisations */
`

export const AvailabilitySelector = () => {
    const dispatch = useDispatch()
    const { loading, error, data } = useQuery(LAST_AVAILABILITY)
    const [updateAvailability] = useMutation(UPDATE_AVAILABILITY)

    const handleChange = async (e: ChangeEvent) => {
        const newValue = (e.target as HTMLInputElement)?.value

        await updateAvailability({
            variables: {
                id: data?.availability?.id,
                status: parseInt(newValue),
            },
        })

        dispatch(
            setAvailability({
                status: newValue,
                statusText: STATUS_TEXTS[newValue as any],
            })
        )
    }

    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error(
                    'AvailabilitySelector: failed loading availabilities'
                )
            }
        }
    }, [error, loading])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <Title small style={{margin: '20px 0 20px 0'}}>Availability</Title>

            <Select value={data.availability.status} onChange={handleChange}>
                {Object.keys(AVAILABILITIES).map((k, i) => (
                    <option
                        key={i}
                        value={AVAILABILITIES[k as keyof IAvailabilityKeys]}
                    >
                        {k.replace('_', ' ')}
                    </option>
                ))}
            </Select>
        </div>
    )
}
