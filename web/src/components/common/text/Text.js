import styled from 'styled-components'

export const Text = styled.p`
  display: inline-block;
  margin: 0;
  color: ${({color}) => color ? color : '#797979'};
  font-size: ${({small}) => small ? '16px' : '24px'};
  font-weight: ${({bold}) => bold ? 'bolder' : 'normal'};
  line-height: 1.5;

  ${({margin}) => margin && `
    margin: 36px 0;
  `}
`
