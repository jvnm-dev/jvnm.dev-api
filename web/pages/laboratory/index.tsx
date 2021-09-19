import React, { useRef } from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/client'

import { Navbar } from '../../components/common/navbar/'
import { IThemeContainer } from '../../constants/themes'
import {
    Container,
    Section,
    Title,
    Text,
    Button,
    Loader,
} from '../../components/common'
import {
    ColumnsContainer,
    Column,
    ImageColumn,
} from '../../components/common/column'

export const DEVELOPMENTS = gql`
    {
        developments {
            id
            name
            description
            image
            sourceCodeUrl
            demoUrl
        }
    }
`

export const DevelopmentCard = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;
    border-radius: 12px;
    background-color: ${({ theme }: IThemeContainer) =>
        theme.constrastedBackground};

    .imageContainer img {
        max-width: 400px;
        border: 2px solid ${({ theme }: IThemeContainer) => theme.colorPrimary};
        border-radius: 12px;
    }

    div.rightSide {
        height: 100%;
        padding: 16px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .buttonContainer {
            display: flex;
            justify-content: space-between;
        }
    }
`

export const LaboratoryIndex = () => {
    const secondSection = useRef<HTMLElement>(null)
    const { loading, data } = useQuery(DEVELOPMENTS)

    const handleExploreClick = () => {
        if (secondSection?.current) {
            window.scrollTo({
                top: secondSection.current.offsetTop ?? 0,
                left: 0,
                behavior: 'smooth',
            })
        }
    }

    return (
        <>
            <Navbar contact />
            <Container>
                <Section first horizontallyCentered verticallyCentered>
                    <ColumnsContainer>
                        <Column padding centered>
                            <Title small>Welcome to my laboratory</Title>
                            <Text margin intro={true}>
                                I am glad you decided to enter here, do not
                                hesitate to contact me if you have any question
                                about the work I did here. <br />
                                <br /> Also, you are free to use the source code
                                of those projects if you want to.
                            </Text>
                            <Button
                                aria-label="Explore"
                                onClick={() => handleExploreClick()}
                            >
                                Explore
                            </Button>
                        </Column>
                        <ImageColumn background="/lab_inside.svg" />
                    </ColumnsContainer>
                </Section>
                <Section
                    horizontallyCentered
                    verticallyCentered
                    ref={secondSection}
                >
                    <ColumnsContainer mobileColumn>
                        <Column padding full>
                            <Title small>Developments</Title>
                            {loading ? (
                                <Loader />
                            ) : data?.developments?.length > 0 ? (
                                data.developments.map((development: any) => (
                                    <DevelopmentCard key={development.id}>
                                        <div className="imageContainer">
                                            {/* eslint-disable-next-line @next/next/no-img-element*/}
                                            <img
                                                src={development.image}
                                                alt={development.name}
                                            />
                                        </div>
                                        <div className="rightSide">
                                            <Title small>
                                                {development.name}
                                            </Title>
                                            <Text>
                                                {development.description}
                                            </Text>
                                            <div className="buttonContainer">
                                                <Button
                                                    href={
                                                        development.sourceCodeUrl
                                                    }
                                                >
                                                    Source code
                                                </Button>
                                                <Button
                                                    href={development.demoUrl}
                                                >
                                                    Demo
                                                </Button>
                                            </div>
                                        </div>
                                    </DevelopmentCard>
                                ))
                            ) : (
                                <Text>No developments yet</Text>
                            )}
                        </Column>
                    </ColumnsContainer>
                </Section>
            </Container>
        </>
    )
}

export default LaboratoryIndex
