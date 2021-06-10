import React from 'react'

import notFound from '../../assets/img/not-found.svg'
import {
    Container,
    Section,
    Title,
    Text,
    Button,
} from '../../components/common'

import { ErrorImage } from '../../components/error'

export const NotFound = () => (
    <Container>
        <Section column horizontallyCentered verticallyCentered mobilePadding>
            <ErrorImage src={notFound} alt="NotFound" />
            <Title small style={{ marginTop: '48px' }}>
                Where are you going?
            </Title>
            <Text margin centered>
                I am very sorry to say that there is nothing here... But maybe I
                will add something here just for you.
            </Text>
            <Button to="/">Go home</Button>
        </Section>
    </Container>
)

export default NotFound
