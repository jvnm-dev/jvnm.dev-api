import React from 'react'
import styled from 'styled-components'

import loaderImage from '../../assets/img/loader.svg'

const LoaderContainer = styled.div<ILoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({full}) => full && `
    height: 100vh;
    width: 100vw;
  `}
`

const LoaderImage = styled.img`
  height: 64px;
  width: 64px;
`

interface ILoaderProps {
    full?: boolean
}

export const Loader = ({ full }: ILoaderProps) => (
    <LoaderContainer full={full}>
        <LoaderImage src={loaderImage} alt="Loading..." />
    </LoaderContainer>
)