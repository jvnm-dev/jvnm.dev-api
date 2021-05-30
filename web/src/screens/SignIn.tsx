import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

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

interface IFormData {
    jvm_email?: string
}

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

    const onSubmit = async (e: MouseEvent) => {
        e.preventDefault()
        await login({
            variables: {
                userData: {
                    email: formData.jvm_email,
                },
            },
        })
    }

    if (session.token) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <Navbar signin />
            <Container>
                <Section first horizontallyCentered verticallyCentered column>
                    {
                        data?.login !== '200'
                            ? (
                               <>
                                   <Title small>Sign in</Title>
                                   {error?.message && <Error>{error.message}</Error>}
                                   <Form autoComplete="off">
                                       <Input
                                         name="jvm_email"
                                         type="text"
                                         placeholder="Email"
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
                               </>
                          ) : (
                            <>
                                <Title small>Check your emails</Title>
                                <br/>
                            </>
                          )
                    }
                    <Text small>
                        Want to <Link to="/">go back?</Link>
                    </Text>
                </Section>
            </Container>
        </>
    )
}

export default SignIn
