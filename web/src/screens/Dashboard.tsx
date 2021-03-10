import React, { useEffect } from 'react'

import { Navbar } from '../components/common/navbar'
import { AvailabilitySelector } from '../components/dashboard'
import { Container, Section, Title } from '../components/common'
import { ExperiencesList } from '../components/dashboard/experiences/ExperiencesList'
import { TechnologiesList } from '../components/dashboard/technologies/TechnologiesList'

export const Dashboard = () => {
    return (
        <>
            <Navbar dashboard />
            <Container>
                <Section column>
                    <AvailabilitySelector />
                    <ExperiencesList />
                    <TechnologiesList />
                </Section>
            </Container>
        </>
    )
}

export default Dashboard
