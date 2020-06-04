import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCardOverlay = styled.div`
    opacity: 0;
    visibility: hidden;
    border-radius: 10px;
    background: #24292E;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 70px;
    color: #FFF;
    transition: 0.2s;
`

const ProjectCard = styled.div`
    width: calc(33% - 16px);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(28, 28, 28, 0.10);
    padding: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    position: relative;
    box-sizing: border-box;
    transition: 0.2s;

    :hover {
        cursor: pointer;
        box-shadow: 0px 0px 5px 0px rgba(28, 28, 28, 0.10);
        transform: scale(1.025);
    }

    :hover ${ProjectCardOverlay} {
        opacity: 1;
        visibility: visible;
    }
`

const CardTitle = styled.h2`
    margin: 0;
`

const CardDescription = styled.p`
    color: #606060;
    font-size: 18px;
`

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardLanguage = styled.div`
    display: flex;
    align-items: center;
`

const CardLanguageBall = styled.span`
    background: ${({bgColor}) => bgColor};
    height: 12px;
    width: 12px;
    border-radius: 50%;
`

const CardFooterText = styled.span`
    margin-left: 8px;
    color: #707070;
    font-weight: 100;
    font-size: 14px;
`

export const Project = ({data: { name, description, language, license, url }}) => {
    const computeLanguageColor = () => {
        switch (language) {
            case 'TypeScript':
                return '#007ACC'
            case 'JavaScript':
                return '#F0D91D'
            case 'Python':
                return '#366B99'
            case 'PHP':
                return '#7478AE'
            default:
                return 'grey'
        }
    }

    const redirect = () => {
        window.location.href = url;
    }

    return (
        <ProjectCard onClick={redirect}>
            <ProjectCardOverlay>
                <FontAwesomeIcon icon={faGithub} />
            </ProjectCardOverlay>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardFooter>
                <CardLanguage>
                    <CardLanguageBall bgColor={() => computeLanguageColor(language)} />
                    <CardFooterText>{language}</CardFooterText>
                </CardLanguage>
                <CardFooterText><FontAwesomeIcon icon={faFileAlt} /> {license}</CardFooterText>
            </CardFooter>
        </ProjectCard>
    )
}
