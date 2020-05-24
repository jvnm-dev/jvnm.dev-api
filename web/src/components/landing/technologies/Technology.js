import React from 'react'
import styled from 'styled-components'

const TechnologyContainer = styled.div`
    margin-top: 48px;
    margin-right: 24px;
    position: relative;

    :hover {
        div {
            visibility: visible;
            opacity: 1;
        }
    }
`
const TechnologyImage = styled.img`
    height: 70px;
    width: 70px;
`

const TechnologyTooltipContainer = styled.div`
    visibility: hidden;
    display: flex;
    height: 70px;
    width: 70px;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    transition: 0.2s;
`

const TechnologyTooltip = styled.span`
    cursor: default;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #FFF;
    border-radius: 5px;
`

export const Technology = ({ image, name }) => (
    <TechnologyContainer>
        <TechnologyTooltipContainer>
            <TechnologyTooltip>{name}</TechnologyTooltip>
        </TechnologyTooltipContainer>
        <TechnologyImage src={image} alt={name} />
    </TechnologyContainer>
)