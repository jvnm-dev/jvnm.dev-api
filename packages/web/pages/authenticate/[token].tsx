import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/slices/session'
import { useRouter } from 'next/router'

export const Authenticate = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const token = router.query?.token

    useEffect(() => {
        if (token) {
            dispatch(setToken(token))
        }

        router.push('/')
    }, [router, token, dispatch])

    return <></>
}

export default Authenticate