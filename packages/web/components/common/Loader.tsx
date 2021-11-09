import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const LoaderContainer = styled.div<ILoaderProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    ${({ full }) => full && `
        height: 100vh;
        width: 100vw;
    `}
`

interface ILoaderProps {
    full?: boolean
}

export const Loader = ({ full }: ILoaderProps) => (
    <LoaderContainer full={full}>
        <Image src='/loader.svg' alt="Loading..." height="64px" width="64px" />
    </LoaderContainer>
)
