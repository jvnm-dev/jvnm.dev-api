import styled from 'styled-components'

export const AvailabilityText = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  margin-left: 16px;

  span {
    color: ${({ theme }) => theme.title?.default};
  }

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: initial;
  }
`
