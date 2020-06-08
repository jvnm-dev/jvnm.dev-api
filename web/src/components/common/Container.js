import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  font-family: 'Montserrat';

  ${props => props.flex && `
    display: flex;
    justify-content: inherit;
    align-items: inherit;
    flex: 1;
  `}

  ${props => props.fullHeight && `
    height: 100%;
  `}
`

export const WavyContainer = styled(Container)`
  background: linear-gradient(135deg, rgba(90,81,250,0.5) 0%, rgba(179,204,210,0.5) 100%);
  clip-path: url(#wave);
`
