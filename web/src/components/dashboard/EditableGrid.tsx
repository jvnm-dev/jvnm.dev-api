import React from 'react'
import {
    DataGrid,
    GridColDef,
    GridEditCellPropsParams,
} from '@material-ui/data-grid'
import styled from 'styled-components'
import { IThemeContainer } from '../../constants/themes'

const StyledDataGrid = styled(DataGrid)``

interface IEditableGridProps {
    columns: GridColDef[]
    rows: any
    onSave: (rows: any[]) => void
    loading: boolean
}

const DataGridContainer = styled.div`
    flex: 1;
    height: 600px;

    .MuiDataGrid-root,
    .MuiTablePagination-root {
        color: ${({ theme }: IThemeContainer) => theme.text};
    }
`

export const EditableGrid = ({
    columns,
    rows,
    onSave,
    loading,
}: IEditableGridProps) => {
    const handleEditCellChangeCommitted = React.useCallback(
        ({ id, field, props }: GridEditCellPropsParams) => {
            const { value } = props

            let parsedValue = value

            try {
                parsedValue = parseInt(value as string)
            } catch {}

            try {
                parsedValue = parseFloat(value as string)
            } catch {}

            const updatedRows = rows.map((row: any) => {
                if (row.id === id) {
                    return { ...row, [field]: parsedValue }
                }
                return row
            })

            onSave(updatedRows)
        },
        [rows]
    )

    return (
        <DataGridContainer>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                pageSize={100}
                checkboxSelection
                columnBuffer={100}
                onEditCellChangeCommitted={handleEditCellChangeCommitted}
                loading={loading}
            />
        </DataGridContainer>
    )
}
