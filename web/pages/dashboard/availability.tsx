import React, { useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useDispatch, useSelector } from 'react-redux'
import { GridColDef } from '@material-ui/data-grid'
import { useMutation, useQuery } from '@apollo/client'

import {
    IAvailabilityReducer,
    setAvailability,
} from '../../redux/slices/availability'
import { EditableGrid } from '../../components/dashboard/EditableGrid'
import { AVAILABILITY } from '../../components/landing/availability/Availability'
import { Loader } from '../../components/common'
import { STATUS_TEXTS } from '../../constants'
import { DashboardTemplate } from '../../components/dashboard/DashboardTemplate'

const UPDATE_AVAILABILITY = gql`
    mutation UpdateAvailability($status: Float!) {
        updateAvailability(status: $status) {
            id
            status
        }
    }
`

interface IAvailability {
    status?: number
}

export const DashboardAvailability = () => {
    const { loading, error, data } = useQuery(AVAILABILITY)
    const [updateAvailability] = useMutation(UPDATE_AVAILABILITY)
    const dispatch = useDispatch()
    const availability = useSelector(
        ({ availability }: IAvailabilityReducer) => availability
    )

    let columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
            type: 'number',
        },
    ]

    useEffect(() => {
        if (data?.availability.status !== availability.status) {
            const newStatus = data?.availability.status
            dispatch(
                setAvailability({
                    status: newStatus,
                    statusText: STATUS_TEXTS[newStatus],
                })
            )
        }
    }, [data, dispatch, availability.status])

    const handleSave = async (newAvailability: IAvailability) => {
        if (availability.status !== newAvailability.status) {
            await updateAvailability({
                variables: {
                    status: newAvailability.status,
                },
            })
        }
    }

    if (loading) {
        return <Loader />
    }

    if (error) {
        throw error
    }

    const rows = [
        {
            id: 1,
            status: availability.status,
        },
    ]

    columns = columns.map((c) => ({ ...c, flex: 1 }))

    return (
        <DashboardTemplate>
            <EditableGrid
                columns={columns}
                rows={rows}
                onSave={handleSave}
                loading={loading}
            />
        </DashboardTemplate>
    )
}

export default DashboardAvailability
