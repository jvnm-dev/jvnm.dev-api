import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'

import {
    Container,
    Section,
    Title,
    Text,
    Button,
    Error,
} from '../../components/common'
import { Navbar } from '../../components/common/navbar'
import { Form, Input } from '../../components/common/form'
import { ISessionReducer } from '../../redux/slices/session'
import emailsImage from '../../assets/img/emails.svg'

interface IFormData {
    jvm_email?: string
}

const Image = styled.img`
    width: 33.33%;
    padding: 32px 0;
`

export const LOGIN = gql`
    mutation Login($userData: UserLoginDto!) {
        login(userData: $userData)
    }
`

export const SignIn = () => {
    const [formData, setFormData] = useState<IFormData>({})
    const session = useSelector(({ session }: ISessionReducer) => session)
    const [login, { loading, data, error }] = useMutation(LOGIN)

    const handleChange = (e: ChangeEvent) => {
        const data = formData
        const target = e.target as HTMLInputElement
        data[target.name as keyof IFormData] = target.value
        setFormData(data)
    }

    const handleSubmit = async (e?: MouseEvent) => {
        e?.preventDefault()

        let email = formData.jvm_email

        if (email?.length && !email?.includes('@')) {
            email += '@gmail.com'
        }

        email = email?.toLowerCase()

        await login({
            variables: {
                userData: {
                    email,
                },
            },
        })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSubmit().catch((error) => console.error(error))
        }
    }

    if (session.token) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <Navbar signin />
            <Container>
                <Section first horizontallyCentered verticallyCentered column>
                    {data?.login !== '200' ? (
                        <>
                            <Title small>Sign in</Title>
                            {error?.message && <Error>{error.message}</Error>}
                            <Form autoComplete="off">
                                <Input
                                    name="jvm_email"
                                    type="text"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onKeyPress={handleKeyDown}
                                />
                                <Button
                                    aria-label="Sign in"
                                    to="/"
                                    width="full"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Sign in'}
                                </Button>
                            </Form>
                        </>
                    ) : (
                        <>
                            <Title small>Check your emails</Title>
                            <Image src={emailsImage} alt={'email'} />
                            <br />
                        </>
                    )}
                    <Text small>
                        Want to <Link to="/">go back?</Link>
                    </Text>
                </Section>
            </Container>
        </>
    )
}

export default SignIn
