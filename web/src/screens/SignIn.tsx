import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import { Container, Section, Title, Text, Button, Error } from '../components/common'
import { Navbar } from '../components/common/navbar'
import { Form, Input } from '../components/common/form'
import { ISessionReducer, setToken } from '../redux/slices/session'

interface IFormData {
    jvm_email?: string
    jvm_password?: string
}

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
`

export const SignIn = () => {
    const [formData, setFormData] = useState<IFormData>({})
    const session = useSelector(({ session }: ISessionReducer) => session)
    const [login, { loading, data, error }] = useMutation(LOGIN)
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent) => {
        const data = formData
        const target = e.target as HTMLInputElement
        data[target.name as keyof IFormData] = target.value
        setFormData(data)
    }

    const onSubmit = async (e: MouseEvent) => {
        e.preventDefault()
        const { data } = await login({ variables: {
            email: formData.jvm_email,
            password: formData.jvm_password,
        }})

        const token = JSON.parse(data.login)

        dispatch(setToken(token))
    }

    if (session.token) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <Navbar signin />
            <Container>
                <Section first horizontallyCentered verticallyCentered column>
                    <Title small>Sign in</Title>
                    {error?.message && (
                        <Error>{error.message}</Error>
                    )}
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
                            disabled={loading}
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
