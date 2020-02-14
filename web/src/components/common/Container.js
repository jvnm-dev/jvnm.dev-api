import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  max-width: 1200px;

  ${props => props.flex && `
    display: flex;
    flex: 1;
  `}
`
