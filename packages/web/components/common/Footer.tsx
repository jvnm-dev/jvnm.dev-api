import React from 'react'
import styled from 'styled-components'
import { IThemeContainer } from '../../constants/themes'

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }: IThemeContainer) => theme.colorPrimary};
    padding: 16px 0;
`

export const HeartContainer = styled.span`
    color: #f85353;
    margin: 0 2px;
`

export const Footer = () => (
    <StyledFooter>
        jvnm.be © 2021 - Made with <HeartContainer>❤️</HeartContainer> at Mons,
        Belgium
    </StyledFooter>
)
