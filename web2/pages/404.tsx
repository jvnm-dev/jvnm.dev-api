import React from 'react'
import Link from 'next/link'

import { Container, Section, Title, Text, Button } from '../components/common'

import { ErrorImage, ErrorImageContainer } from '../components/error'

export const Custom404 = () => (
    <Container>
        <Section column horizontallyCentered verticallyCentered mobilePadding>
            <ErrorImageContainer>
                <ErrorImage src="/error.svg" alt="NotFound" />
            </ErrorImageContainer>
            <Title small style={{ marginTop: '48px' }}>
                Where are you going?
            </Title>
            <Text margin centered>
                I am very sorry to say that there is nothing here... But maybe I
                will add something here just for you.
            </Text>
            <Link href="/" passHref>
                <Button>Go home</Button>
            </Link>
        </Section>
    </Container>
)

export default Custom404
