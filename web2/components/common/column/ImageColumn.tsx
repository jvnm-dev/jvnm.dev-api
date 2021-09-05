import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { Column } from './'

const StyledImageColumn = styled(Column)`
    display: none;
    box-sizing: border-box;
    padding: 48px 24px;
    overflow: hidden;
    border-radius: 5px;
    min-height: 60vh;
    position: relative;

    @media only screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const StyledImage = styled(Image)`
    flex: 1;
    border-radius: 5px;
    width: 100%;
`

interface IImageColumnProps {
    background: string
}

export const ImageColumn = ({ background }: IImageColumnProps) => {
    return (
        <StyledImageColumn padding>
            <StyledImage
                src={background}
                alt="Jason Van Malder - Computer"
                layout="fill"
                priority={true}
            />
        </StyledImageColumn>
    )
}
