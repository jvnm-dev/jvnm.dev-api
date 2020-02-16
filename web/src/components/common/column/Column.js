import styled from 'styled-components'

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props => props.centered && `
    margin: 0 auto;
  `}

  ${props => props.padding && `
    padding: 24px;
  `}
`
