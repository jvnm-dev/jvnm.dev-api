import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
    Container,
    Section,
    Title,
    Text,
    Button,
    Error,
} from '../components/common'
import { Navbar } from '../components/common/navbar'
import { Form, Input } from '../components/common/form'
import { ISessionReducer } from '../redux/slices/session'
import emailImage from '../public/emails.svg'

interface IFormData {
    jvm_email?: string
}

const ImageContainer = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
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
    const router = useRouter()

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
        router.push('/dashboard')
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
                                <Link href="/" passHref>
                                    <Button
                                        aria-label="Sign in"
                                        width="full"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                    >
                                        {loading ? 'Loading...' : 'Sign in'}
                                    </Button>
                                </Link>
                            </Form>
                        </>
                    ) : (
                        <>
                            <Title small>Check your emails</Title>
                            <ImageContainer>
                                <Image
                                    src={emailImage}
                                    alt={'email'}
                                    priority={true}
                                    layout="fill"
                                />
                            </ImageContainer>
                            <br />
                        </>
                    )}
                    <Text small>
                        Want to <Link href="/">go back?</Link>
                    </Text>
                </Section>
            </Container>
        </>
    )
}

export default SignIn
