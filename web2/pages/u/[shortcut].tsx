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
    const shortcut =
        router.query.shortcut ||
        router.asPath.match(new RegExp(`[&?]shortcut=(.*)(&|$)`))

    const { data } = useQuery(URL, {
        variables: {
            shortcut,
        },
    })

    useEffect(() => {
        if (data?.url) {
            const original = data.url.original
            window.location.href = original
        }

        router.push('/')
    }, [router, data])

    return <Loader full />
}

export default ShortUrlRedirect
