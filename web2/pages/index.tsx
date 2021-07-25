import React, { useRef, MouseEvent } from 'react'

import { WaveClipPath } from '../components/common/svg'
import {
    Container,
    WavyContainer,
    Title,
    Text,
    Button,
    Section,
} from '../components/common'
import {
    ColumnsContainer,
    Column,
    ImageColumn,
} from '../components/common/column'
import { Navbar } from '../components/common/navbar/'
import {
    Availability,
    Experiences,
    Technologies,
    Projects,
} from '../components/landing'
import { Footer } from '../components/common/Footer'

export const Home = () => {
    const secondSection = useRef(null)

    const handleLearnMoreClick = (e: MouseEvent) => {
        e.preventDefault()
        window.scrollTo({
            top: (secondSection?.current as any)?.offsetTop ?? 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Navbar contact />
            <Container>
                <Section first horizontallyCentered verticallyCentered>
                    <ColumnsContainer>
                        <Column padding centered>
                            <Title>Software Engineer</Title>
                            <Text margin intro={true}>
                                Currently on assignment at{' '}
                                <strong>TAKTIK</strong>, a company specialized
                                in IPTV, media management and secure solutions
                                for the medical sector.
                            </Text>
                            <Button
                                aria-label="Learn more"
                                onClick={handleLearnMoreClick}
                            >
                                Learn more
                            </Button>
                            <Availability />
                        </Column>
                        <ImageColumn background='/developer3.svg' />
                    </ColumnsContainer>
                </Section>
                <Section
                    horizontallyCentered
                    verticallyCentered
                    ref={secondSection}
                >
                    <ColumnsContainer mobileColumn>
                        <Column>
                            <Title small>Education &amp; Experiences</Title>
                            <Experiences />
                        </Column>
                        <Column>
                            <Title small marginMobile>
                                Technologies I work with
                            </Title>
                            <Technologies />
                        </Column>
                    </ColumnsContainer>
                </Section>
            </Container>
            <WaveClipPath />
            <WavyContainer>
                <Section column horizontallyCentered mobilePadding>
                    <Title small inverse>
                        Open-source side projects
                    </Title>
                    <Projects />
                </Section>
                <Footer />
            </WavyContainer>
        </>
    )
}

export default Home
