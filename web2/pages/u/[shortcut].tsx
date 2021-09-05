import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import { Loader } from '../../components/common/Loader'

export const URL = gql`
    query Url($shortcut: String!) {
        url(shortcut: $shortcut) {
            id
            original
            shortcut
        }
    }
`

export const ShortUrlRedirect = () => {
    const router = useRouter()
    const shortcut = router.query?.shortcut

    const { data, refetch } = useQuery(URL, {
        variables: {
            shortcut,
        },
    })

    useEffect(() => {
        if (data?.url) {
            const original = data.url.original
            window.location.href = original
        } else if ((shortcut ?? '').length > 0) {
            router.push('/')
        } else {
            refetch()
        }
    }, [router, data, shortcut, refetch])

    return <Loader full />
}

export default ShortUrlRedirect
