import React from 'react'

import { Navbar } from '../../components/common/navbar'
import { Container } from '../../components/common'
import { Journey as JourneyComponent } from '../../components/landing/journey/Journey'
import { useParams } from 'react-router'

export const Journey = () => {
    const { id }: { id: string } = useParams()

    return (
        <>
            <Navbar />
            <Container>
                <JourneyComponent id={Number(id)} />
            </Container>
        </>
    )
}

export default Journey
