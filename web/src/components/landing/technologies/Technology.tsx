import React from 'react'
import styled from 'styled-components'
import { ITechnology } from '../../../redux/slices/technologies'

const TechnologyContainer = styled.div`
    margin-top: 36px;
    margin-right: 24px;
    position: relative;
    :hover {
        div {
            visibility: visible;
            opacity: 1;
        }
    }
    @media only screen and (min-width: 1024px) {
        margin-top: 48px;
    }
`
export const TechnologyImage = styled.img`
    height: 40px;
    width: 40px;
    @media only screen and (min-width: 768px) {
        height: 36px;
        width: 36px;
    }
    @media only screen and (min-width: 1024px) {
        height: 50px;
        width: 50px;
    }
    @media only screen and (min-width: 1440px) {
        height: 70px;
        width: 70px;
    }

    ${({ dashboard }) =>
        dashboard &&
        `
    margin-right: 10px;
    margin-top: 10px;
    cursor: pointer;
    height: 80px !important;
    width: 80px !important;
  `}
`

const TechnologyTooltipContainer = styled.div`
    visibility: hidden;
    display: flex;
    height: 70px;
    width: 70px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    transition: 0.2s;
    @media only screen and (min-width: 768px) {
        height: 36px;
        width: 36px;
        font-size: 11px;
    }
    @media only screen and (min-width: 1024px) {
        height: 50px;
        width: 50px;
        font-size: 13px;
    }
    @media only screen and (min-width: 1440px) {
        height: 70px;
        width: 70px;
        font-size: 16px;
    }
`

const TechnologyTooltip = styled.span`
    cursor: default;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    border-radius: 5px;
`

export const Technology = ({ image, name }: Partial<ITechnology>) => (
    <TechnologyContainer>
        <TechnologyTooltipContainer>
            <TechnologyTooltip>{name}</TechnologyTooltip>
        </TechnologyTooltipContainer>
        <TechnologyImage src={image} alt={name} />
    </TechnologyContainer>
)
