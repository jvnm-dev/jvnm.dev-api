import React from 'react'
import styled from 'styled-components'

import loaderImage from '../../assets/img/loader.svg'

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderImage = styled.img`
  height: 64px;
  width: 64px;
`

export const Loader = () => (
  <LoaderContainer>
    <LoaderImage src={loaderImage} alt="Loading..." />
  </LoaderContainer>
)
