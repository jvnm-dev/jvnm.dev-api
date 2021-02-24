import styled from 'styled-components'

export const AvailabilityText = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: ${({ theme }) => theme.text};
    margin: 0 0 0 16px;
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
