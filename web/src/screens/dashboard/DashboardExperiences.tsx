import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GridCellParams, GridColDef } from '@material-ui/data-grid'
import { useQuery } from '@apollo/react-hooks'

import { EditableGrid } from '../../components/dashboard/EditableGrid'
import { Loader } from '../../components/common'
import { EXPERIENCES } from '../../components/landing/experience/Experiences'
import { setExperiences } from '../../redux/slices/experiences'

export const DashboardExperiences = () => {
    const [rows, setRows] = useState([])
    const { loading, error, data } = useQuery(EXPERIENCES)
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
            field: 'place',
            headerName: 'Place',
            width: 150,
            editable: true,
            type: 'string',
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 150,
            editable: true,
            type: 'string',
        },
        {
            field: 'dateFrom',
            headerName: 'From',
            width: 150,
            editable: true,
            type: 'string',
        },
        {
            field: 'dateTo',
            headerName: 'To',
            width: 150,
            editable: true,
            type: 'string',
        },
    ]

    useEffect(() => {
        if (data?.experiences) {
            const experiences = data?.experiences ?? []

            dispatch(
                setExperiences([...experiences].sort((a, b) => b.id - a.id))
            )

            setRows(experiences)
        }
    }, [data])

    const handleSave = async (rows: any) => {
        console.log(rows)
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
