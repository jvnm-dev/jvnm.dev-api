import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { GridCellParams, GridColDef } from '@material-ui/data-grid'
import { useMutation, useQuery } from '@apollo/react-hooks'

import { EditableGrid } from '../../components/dashboard/EditableGrid'
import { TECHNOLOGIES } from '../../components/landing/technologies/Technologies'
import { setTechnologies } from '../../redux/slices/technologies'
import { gql } from 'apollo-boost'
import { TechnologyEntity } from '../../../../api/src/technology/technology.entity'

const UPDATE_TECHNOLOGY = gql`
    mutation UpdateTechnology($technology: String!) {
        updateTechnology(technology: $technology) {
            id
        }
    }
`

export const DashboardTechnologies = () => {
    const [rows, setRows] = useState([])
    const { loading, error, data } = useQuery(TECHNOLOGIES)
    const [updateTechnology] = useMutation(UPDATE_TECHNOLOGY)
    const dispatch = useDispatch()

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'image',
            headerName: 'Image',
            width: 150,
            editable: true,
            type: 'string',
            renderCell: (params: GridCellParams) => (
                <img
                    src={params.value?.toString()}
                    alt="experience image"
                    width={48}
                />
            ),
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
            type: 'string',
        },
    ]

    useEffect(() => {
        if (data?.technologies) {
            const technologies = data?.technologies ?? []

            dispatch(setTechnologies([...technologies]))

            setRows(technologies)
        }
    }, [data])

    const handleSave = async (technology: Partial<TechnologyEntity>) => {
        await updateTechnology({
            variables: {
                technology: JSON.stringify(technology),
            },
        })
    }

    if (error) {
        throw error
    }

    return (
        <EditableGrid
            columns={columns}
            rows={rows}
            onSave={handleSave}
            loading={loading}
        />
    )
}
