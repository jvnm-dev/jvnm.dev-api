import styled from 'styled-components'

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 50%;

  ${props => props.centered && `
    justify-content: center;
  `}

  ${props => props.padding && `
    padding: 24px;
  `}
`
