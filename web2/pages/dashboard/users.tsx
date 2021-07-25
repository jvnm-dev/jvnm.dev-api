import React, { useEffect, useState } from 'react'
import { GridColDef } from '@material-ui/data-grid'
import { useQuery } from '@apollo/react-hooks'

import { EditableGrid } from '../../components/dashboard/EditableGrid'
import { gql } from 'apollo-boost'
import { DashboardTemplate } from '../../components/dashboard/DashboardTemplate'

export const USERS = gql`
    {
        users {
            id
            email
        }
    }
`

export const DashboardUsers = () => {
    const [rows, setRows] = useState([])
    const { loading, error, data } = useQuery(USERS)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: true,
            type: 'string',
        },
    ]

    useEffect(() => {
        if (data?.users) {
            const users = data?.users ?? []

            setRows(users)
        }
    }, [data])

    const handleSave = async (rows: any) => {
        console.log(rows)
    }

    if (error) {
        throw error
    }

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

export default DashboardUsers
