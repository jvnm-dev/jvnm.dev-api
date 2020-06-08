import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${({small}) => small ? '26px' : '60px'};
  color: ${({inverse}) => inverse ? '#FFF' : '#24292E'};
  font-weight: 600;
  margin: ${({marginMobile}) => marginMobile ? '36px 0 0 0' : '0'};

  @media only screen and (min-width: 768px) {
    margin: 0;
  }

  @media only screen and (min-width: 1024px) {
    font-size: ${({small}) => small ? '32px' : '80px'};
  }

  @media only screen and (min-width: 1440px) {
    font-size: ${({small}) => small ? '40px' : '100px'};
  }
`
