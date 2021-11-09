import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IProject } from '../../../redux/slices/projects'
import { IThemeContainer } from '../../../constants/themes'

const ProjectCardOverlay = styled.div`
    opacity: 0;
    visibility: hidden;
    border-radius: 10px;
    background: #24292e;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 70px;
    color: #fff;
    transition: 0.2s;
`

const ProjectCard = styled.div`
    background: ${({ theme }: IThemeContainer) => theme.background};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(28, 28, 28, 0.2);
    margin-right: 16px;
    margin-bottom: 16px;
    position: relative;
    box-sizing: border-box;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    :hover {
        cursor: pointer;
        box-shadow: 0 0 5px 0 rgba(28, 28, 28, 0.3);
        transform: scale(1.025);
    }

    :hover ${ProjectCardOverlay} {
        opacity: 1;
        visibility: visible;
    }

    @media only screen and (min-width: 768px) {
        width: calc(33% - 16px);
    }
`

const CardTitle = styled.h2`
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-size: 20px;
    background: linear-gradient(135deg, #24292e 0%, #30363c);
    color: ${({ theme }: IThemeContainer) =>
        theme.name === 'THEME_LIGHT' ? theme.title?.inverse : theme.text};
    padding: 8px 16px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media only screen and (min-width: 1024px) {
        font-size: 24px;
    }
`

const CardDescription = styled.p`
    color: ${({ theme }: IThemeContainer) => theme.text};
    font-size: 12px;
    padding: 0 8px;

    @media only screen and (min-width: 768px) {
        padding: 0 16px;
    }
    @media only screen and (min-width: 768px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 1440px) {
        font-size: 18px;
    }
`

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 8px 8px 8px;

    @media only screen and (min-width: 768px) {
        padding: 0 16px 16px 16px;
    }
`

const CardLanguage = styled.div`
    display: flex;
    align-items: center;
`

const CardLanguageBall = styled.span<{ bgColor?: () => string }>`
    background: ${({ bgColor }) => bgColor};
    height: 12px;
    width: 12px;
    border-radius: 50%;
`

const CardFooterText = styled.span`
    margin-left: 8px;
    color: ${({ theme }: IThemeContainer) => theme.text};
    font-weight: 100;
    font-size: 12px;
    @media only screen and (min-width: 768px) {
        font-size: 14px;
    }
`

export const Project = ({
    data: { name, description, language, license, url },
}: {
    data: Partial<IProject>
}) => {
    const computeLanguageColor = (language: string) => {
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
        Object.assign(document.createElement('a'), {
            target: '_blank',
            href: url,
        }).click()
    }

    return (
        <ProjectCard onClick={redirect}>
            <ProjectCardOverlay>
                <FontAwesomeIcon icon={faGithub} />
            </ProjectCardOverlay>
            <CardTitle>
                <span>{name}</span>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                </span>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardFooter>
                <CardLanguage>
                    <CardLanguageBall
                        bgColor={() => computeLanguageColor(language ?? '')}
                    />
                    <CardFooterText>{language}</CardFooterText>
                </CardLanguage>

                <CardFooterText>
                    <FontAwesomeIcon icon={faFileAlt} /> {license?.spdx_id}
                </CardFooterText>
            </CardFooter>
        </ProjectCard>
    )
}
