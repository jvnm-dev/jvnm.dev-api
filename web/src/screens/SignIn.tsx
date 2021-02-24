import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Section, Title, Text, Button } from '../components/common'
import { Navbar } from '../components/common/navbar'
import { Form, Input } from '../components/common/form'
import { BACKEND_URL } from '../constants'
import { fetchPost } from '../helpers/fetch'
import { ISessionReducer, setToken } from '../redux/slices/session'

interface IFormData {
    jvm_email?: string
    jvm_password?: string
}

export const SignIn = () => {
    const [formData, setFormData] = useState<IFormData>({})
    const [loading, setLoading] = useState(false)
    const session = useSelector(({ session }: ISessionReducer) => session)
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent) => {
        const data = formData
        const target = e.target as HTMLInputElement
        data[target.name as keyof IFormData] = target.value
        setFormData(data)
    }

    const onSubmit = async (e: MouseEvent) => {
        e.preventDefault()
        setLoading(true)
        const { jwt } = await fetchPost(`${BACKEND_URL}/auth/signin`, formData)
        setLoading(false)
        dispatch(setToken(jwt))
    }

    if (session.token) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <Navbar />
            <Container>
                <Section first horizontallyCentered verticallyCentered column>
                    <Title small>Sign in</Title>
                    <Form autoComplete="off">
                        <Input
                            name="jvm_email"
                            type="text"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <Input
                            name="jvm_password"
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <Button
                            aria-label="Sign in"
                            to="/"
                            width="full"
                            onClick={onSubmit}
                        >
                            {loading ? 'Loading...' : 'Sign in'}
                        </Button>
                    </Form>
                    <Text small>
                        Want to <Link to="/">go back?</Link>
                    </Text>
                </Section>
            </Container>
        </>
    )
}

export default SignIn
