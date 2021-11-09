import React from 'react'

import { Container, Section, Title, Text } from '../components/common'

import { ErrorImage, ErrorImageContainer } from '../components/error'

export const Maintenance = () => (
    <Container>
        <Section column horizontallyCentered verticallyCentered mobilePadding>
            <ErrorImageContainer>
                <ErrorImage src="/maintenance.svg" alt="NotFound" />
            </ErrorImageContainer>
            <Title small style={{ marginTop: '48px' }}>
                Sorry
            </Title>
            <Text margin centered>
                The website is under maintenance, please come back later.
            </Text>
        </Section>
    </Container>
)

export default Maintenance
