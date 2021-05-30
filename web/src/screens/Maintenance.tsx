import React from 'react'

import maintenanceImage from '../assets/img/maintenance.svg'
import { Container, Section, Title, Text } from '../components/common'

import { ErrorImage } from '../components/error'

export const Maintenance = () => (
    <Container>
        <Section column horizontallyCentered verticallyCentered mobilePadding>
            <ErrorImage src={maintenanceImage} alt="Maintenance" />
            <Title small style={{ marginTop: '48px' }}>Sorry</Title>
            <Text margin centered>
                The website is under maintenance, please come back later.
            </Text>
        </Section>
    </Container>
)

export default Maintenance
