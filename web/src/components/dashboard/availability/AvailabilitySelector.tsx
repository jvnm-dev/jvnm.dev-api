import React, { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { Loader, Title } from '../../common'
import {
    IAvailabilityReducer,
    setAvailability,
} from '../../../redux/slices/availability'
import { AVAILABILITIES, STATUS_TEXTS } from '../../../constants'
import { AVAILABILITY } from '../../landing/availability/Availability'
import { IAvailabilityKeys } from '../../../constants/availabilities'
import styled from 'styled-components'

const UPDATE_AVAILABILITY = gql`
    mutation UpdateAvailability($status: Float!) {
        updateAvailability(status: $status) {
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
    background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')
        #eaeaea no-repeat 90% !important; /* !important used for overriding all other customisations */
`

export const AvailabilitySelector = () => {
    const dispatch = useDispatch()
    const availability = useSelector(
        ({ availability }: IAvailabilityReducer) => availability
    )

    const { loading, error, data } = useQuery(AVAILABILITY)
    const [updateAvailability] = useMutation(UPDATE_AVAILABILITY)
    const updateAvailabilityInStore = (newValue: number) =>
        dispatch(
            setAvailability({
                status: newValue,
                statusText: STATUS_TEXTS[newValue],
            })
        )

    const handleChange = async (e: ChangeEvent) => {
        const newValue = parseInt((e.target as HTMLInputElement)?.value)

        await updateAvailability({
            variables: {
                status: newValue,
            },
        })

        updateAvailabilityInStore(newValue)
    }

    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error(
                    'AvailabilitySelector: failed loading availabilities'
                )
            }

            if (data) {
                // If availability loaded, update it in redux
                updateAvailabilityInStore(data?.availability?.status ?? 0)
            }
        }
    }, [error, loading, data])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <Title small style={{ margin: '20px 0 20px 0' }}>
                Availability
            </Title>

            <Select value={availability.status} onChange={handleChange}>
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
