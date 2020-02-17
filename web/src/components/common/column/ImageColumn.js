import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { Column } from './'

const StyledImageColumn = styled(Column)`
  padding: 48px 24px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  min-height: 60vh;
  box-shadow: 0px 0px 10px 0px rgba(28, 28, 28, 0.25);
`

const Overlay = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
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

export const ImageColumn = ({ background }) => {
  const columnRef = useRef(null)
  const [overlayWidth, setOverlayWidth] = useState(0)
  const [overlayHeight, setOverlayHeight] = useState(0)

  useEffect(() => {
    const { offsetWidth, offsetHeight } = columnRef.current
    setOverlayWidth(offsetWidth + 'px')
    setOverlayHeight(offsetHeight + 'px')
  }, [columnRef, overlayHeight, overlayWidth])

  return (
    <StyledImageColumn padding ref={columnRef}>
      <Overlay
        width={overlayWidth}
        height={overlayHeight}
      />
      <Image src={background} alt='Jason Van Malder - Computer' />
    </StyledImageColumn>
  )
}
