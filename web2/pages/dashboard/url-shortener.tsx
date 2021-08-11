import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { gql } from 'apollo-boost'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { GridColDef } from '@material-ui/data-grid'

import { Button, Loader } from '../../components/common'
import { Input } from '../../components/common/form'
import { DashboardTemplate } from '../../components/dashboard/DashboardTemplate'
import { IThemeContainer } from '../../constants/themes'
import { EditableGrid } from '../../components/dashboard/EditableGrid'
import { IUrlReducer, setUrls } from '../../redux/slices/urls'

const PrimaryColored = styled.span`
    color: ${({ theme }: IThemeContainer) => theme.colorPrimary};
`

const Container = styled.div<{
    flex?: number
}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: ${({ flex }) => flex ?? ''};
`

const FormInput = styled(Input)`
    width: 50%;
`

export const URLS = gql`
    {
        urls {
            id
            original
            shortcut
        }
    }
`

const SHORTEN_URL = gql`
    mutation Shorten($original: String!) {
        shorten(original: $original) {
            id
            original
            shortcut
        }
    }
`

export const DashboardUrlShortener = () => {
    const { loading, error, data } = useQuery(URLS)
    const [shortenUrl] = useMutation(SHORTEN_URL)
    const [rows, setRows] = useState<IUrl[]>([])
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const urls = useSelector(({ urls }: IUrlReducer) => urls)

    const onShortenClick = async (): Promise<void> => {
        const input = inputRef.current

        if (input) {
            const response = await shortenUrl({
                variables: {
                    original: (input as HTMLInputElement).value,
                },
            })

            if (response?.data?.shorten) {
                const { id, original, shortcut } = response.data.shorten
                const urlsUpdated = [...urls, { id, original, shortcut }]
                dispatch(setUrls(urlsUpdated))
            }
        }
    }

    useEffect(() => {
        if (data?.urls) {
            const urls = data?.urls ?? []
            dispatch(setUrls([...urls]))
        }
    }, [data, dispatch])

    useEffect(() => {
        setRows(urls)
    }, [urls])

    if (loading) {
        return <Loader />
    }

    if (error) {
        throw error
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'original',
            headerName: 'Original',
            width: 400,
            editable: true,
            type: 'string',
            renderCell: ({ value }) =>
                (
                    <a href={value ?? ''} target="_blank" rel="noreferrer">
                        {value}
                    </a>
                ) as any,
        },
        {
            field: 'shortcut',
            headerName: 'Shortcut',
            width: 150,
            editable: true,
            type: 'string',
        },
        {
            field: 'link',
            headerName: 'Link',
            editable: false,
            type: 'string',
            width: 400,
            renderCell: ({ row }) =>
                (
                    <a
                        href={`https://jvnm.dev/u/${row.shortcut}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://jvnm.dev/u/{row.shortcut}
                    </a>
                ) as any,
        },
    ]

    return (
        <DashboardTemplate>
            <Container>
                <h2>
                    The shorter, <PrimaryColored>the better</PrimaryColored>
                </h2>

                <FormInput
                    type="text"
                    placeholder="URL to shorten"
                    ref={inputRef}
                />

                <Button onClick={onShortenClick} style={{ width: '50%' }}>
                    Shorten
                </Button>
            </Container>
            <Container flex={1}>
                <h2>Recent URLs</h2>
                <EditableGrid
                    sortingOrder={['desc', 'asc']}
                    columns={columns}
                    rows={rows}
                    onSave={() => console.log('save')}
                    loading={false}
                />
            </Container>
        </DashboardTemplate>
    )
}

export default DashboardUrlShortener
