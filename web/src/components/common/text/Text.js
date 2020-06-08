import styled from 'styled-components'

export const Text = styled.p`
  display: ${({mobileInvisible}) => mobileInvisible ? 'none' : 'inline-block'};
  margin: 0;
  color: ${({color}) => color ? color : '#797979'};
  font-size: ${({small}) => small ? '12px' : '16px'};
  font-weight: ${({bold}) => bold ? 'bolder' : 'normal'};
  line-height: 1.5;

  ${({margin}) => margin && `
    margin: 24px 0;
  `}

  @media only screen and (min-width: 768px) {
    display: inline-block;
    font-size: ${({small}) => small ? '10px' : '16px'};
  }

  @media only screen and (min-width: 1024px) {
    font-size: ${({small}) => small ? '14px' : '18px'};

    ${({margin}) => margin && `
      margin: 36px 0;
    `}
  }

  @media only screen and (min-width: 1440px) {
    font-size: ${({small}) => small ? '16px' : '24px'};
  }
`
