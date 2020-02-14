import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  max-width: 1200px;

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
