import styled from 'styled-components'

export const Text = styled.p`
  margin: 0;
  color: #797979;
  font-size: 25px;
  line-height: 1.5;

  ${props => props.margin && `
    margin: 24px 0;
  `}
`
