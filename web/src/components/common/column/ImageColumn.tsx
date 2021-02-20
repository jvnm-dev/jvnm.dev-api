import React from 'react'
import styled from 'styled-components'

import { Column } from './'

const StyledImageColumn = styled(Column)`
  display: none;
  box-sizing: border-box;
  padding: 48px 24px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  min-height: 60vh;
  box-shadow: 0px 0px 10px 0px rgba(28, 28, 28, 0.25);
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(
    135deg,
    rgba(90,81,250 ,0.5) 0%,
    rgba(179,204,210 ,0.5) 100%,
    rgba(0,212,255 ,0.5) 100%
  );
`
const Image = styled.img`
  flex: 1;
  border-radius: 5px;
  position: absolute;
  top: -10vh;
  left: 0;
  z-index: 1;
`

interface IImageColumnProps {
    background?: string
}

export const ImageColumn = ({ background }: IImageColumnProps) => {
    return (
        <StyledImageColumn padding>
            <Overlay />
            <Image src={background} alt='Jason Van Malder - Computer' />
        </StyledImageColumn>
    )
}