import styled from 'styled-components'

export const ExperienceTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-weight: normal;
  font-size: 13px;

  @media only screen and (min-width: 768px) {
    font-size: 13px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 19px;
  }
`
