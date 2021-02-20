import styled from 'styled-components'

export const Container = styled.div<{
    flex?: boolean
    fullHeight?: boolean
}>`
  display: block;
  font-family: 'Montserrat', sans-serif;
  ${props => props.flex && `
    display: flex;
    justify-content: inherit;
    align-items: inherit;
    flex: 1;
    flex-wrap: wrap;
  `}
  ${props => props.fullHeight && `
    height: 100%;
  `}
`

export const WavyContainer = styled(Container)`
  background: ${({ theme }) => theme.wavyContainer};
  clip-path: url(#wave);
`