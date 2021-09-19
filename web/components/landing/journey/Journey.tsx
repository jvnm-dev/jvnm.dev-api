import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { gql } from 'apollo-boost'
import { useQuery, QueryResult } from '@apollo/react-hooks'
import { IExperience } from '../experience/Experience'
import styled from 'styled-components'
import { IThemeContainer } from '../../../constants/themes'
import { Container, Section } from '../../common'

export const JOURNEY = gql`
    query journey($id: Int!) {
        journey(id: $id) {
            id
            description
            experience {
                place
            }
        }
    }
`

interface IOwnProps {
    id: number
}

interface IJourney {
    journey: {
        id: number
        experience: Partial<IExperience>
        description: string
    }
}

const JourneyBody = styled.div`
    margin-top: 50px;

    p {
        font-size: 20px;
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 36px;
    }

    h3 {
        font-size: 30px;
    }

    h4 {
        font-size: 26px;
    }
`

interface IJourneyHeaderProps {
    background: string
}

const JourneyContainer = styled.div`
    flex: 1;
`

const JourneyHeader = styled.div`
    background: url(${({ background }: IJourneyHeaderProps) => background})
        no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    color: #fff;
    width: 100%;
    height: 300px;
    border-radius: 16px;
`

const JourneyOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
        135deg,
        rgba(90, 81, 250, 0.8) 0%,
        rgba(179, 204, 210, 0.8) 100%,
        rgba(0, 212, 255, 0.8) 100%
    );
    height: 100%;
    width: 100%;
    border-radius: 16px;
`

const JourneyTitle = styled.h1`
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    font-size: 50px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Journey = ({ id }: IOwnProps) => {
    const { loading, error, data }: QueryResult<IJourney> = useQuery(JOURNEY, {
        variables: { id },
    })

    const [background, setBackground] = useState('')

    useEffect(() => {
        if (data?.journey) {
            switch (data?.journey.id) {
                case 1:
                    setBackground('/experience-1.jpg')
                    break
                case 2:
                    setBackground('/experience-2.png')
                    break
                case 3:
                    setBackground('/experience-3.jpeg')
                    break
                case 4:
                    setBackground('/experience-4.jpg')
                    break
            }
        }
    }, [data])

    if (loading) return <></>
    if (error) throw error

    const journey = data?.journey

    return (
        <Container>
            <Section>
                <JourneyContainer>
                    <JourneyHeader background={background}>
                        <JourneyOverlay />
                        <JourneyTitle>
                            My journey at {journey?.experience.place}
                        </JourneyTitle>
                    </JourneyHeader>
                    <JourneyBody>
                        <ReactMarkdown>
                            {journey?.description ?? ''}
                        </ReactMarkdown>
                    </JourneyBody>
                </JourneyContainer>
            </Section>
        </Container>
    )
}
