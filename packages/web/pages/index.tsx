import React, { useRef, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

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

const GradientCompanyName = styled.strong`
    background: -webkit-linear-gradient(45deg, #55a143, #88d676);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
`

export const Home = () => {
    const router = useRouter()
    const secondSection = useRef(null)

    const handleLearnMoreClick = (e: MouseEvent) => {
        e.preventDefault()
        window.scrollTo({
            top: (secondSection?.current as any)?.offsetTop ?? 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    const handleLaboratoryClick = (e: MouseEvent) => {
        e.preventDefault()
        router.push('/laboratory')
    }

    const handleCompanyNameClick = (e: MouseEvent) => {
        window.location.href = 'https://haulogy.net/'
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
                                <GradientCompanyName
                                    onClick={handleCompanyNameClick}
                                >
                                    Haulogy
                                </GradientCompanyName>
                                , a company that offers IT solutions both to
                                Distribution Network Managers and energy
                                suppliers.
                            </Text>
                            <Button
                                aria-label="Learn more"
                                onClick={handleLearnMoreClick}
                            >
                                Learn more
                            </Button>
                            <Availability />
                        </Column>
                        <ImageColumn background="/developer.svg" />
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
                <Section horizontallyCentered verticallyCentered>
                    <ColumnsContainer>
                        <Column padding centered>
                            <Title small>Visit my laboratory</Title>
                            <Text margin intro={true}>
                                Want to see my latest ideas and developments?
                                Visit my laboratory. This is a fully open-source
                                place where I share things I want to try.
                            </Text>
                            <Button
                                aria-label="Enter"
                                onClick={handleLaboratoryClick}
                            >
                                Enter
                            </Button>
                        </Column>
                        <ImageColumn background="/lab.svg" />
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
