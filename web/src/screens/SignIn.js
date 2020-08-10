import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Section, Title, Text, Button } from '../components/common'
import { Navbar } from '../components/common/navbar'
import { Form, Input } from '../components/common/form'
import { BACKEND_URL } from '../constants'
import { fetchPost } from '../helpers/fetch'
import { setToken } from '../redux/slices/session'

const SignIn = () => {
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const session = useSelector(({ session }) => session)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const data = formData
        data[e.target.name] = e.target.value
        setFormData(data)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { jwt } = await fetchPost(`${BACKEND_URL}/auth/signin`, formData)
        setLoading(false)
        dispatch(setToken(jwt))
    }

    if (session.token) {
        return <Redirect to='/dashboard' />
    }

    return (
        <>
            <Navbar />
            <Container>
                <Section first horizontallyCentered verticallyCentered column>
                    <Title small>Sign in</Title>
                    <Form autocomplete='off'>
                        <Input name='jvm_email' type='text' placeholder='Email' onChange={handleChange} />
                        <Input name='jvm_password' type='password' placeholder='Password' onChange={handleChange} />
                        <Button aria-label='Sign in' to='/' width='full' onClick={onSubmit}>{loading ? 'Loading...' : 'Sign in'}</Button>
                    </Form>
                    <Text small>Want to <Link to='/'>go back?</Link></Text>
                </Section>
            </Container>
        </>
    )

}

export default SignIn