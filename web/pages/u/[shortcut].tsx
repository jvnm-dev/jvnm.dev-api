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

    const { loading, data } = useQuery(URL, {
        variables: {
            shortcut: shortcut ?? '',
        },
    })

    useEffect(() => {
        if (!loading) {
            if (!shortcut || !data?.url) {
                router.push('/404')
            }

            if (data?.url) {
                router.push(data.url.original)
            }
        }
    }, [router, data, shortcut, loading])

    return <Loader full />
}

export default ShortUrlRedirect
