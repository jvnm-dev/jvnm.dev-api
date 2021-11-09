import styled from 'styled-components'

export const Column = styled.div<{
    centered?: boolean
    padding?: boolean
    full?: boolean
}>`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${({ centered }) => centered && `justify-content: center;`}

    ${({ padding }) => padding && `padding: 24px;`}
  
    @media only screen and (min-width: 768px) {
        ${({ full }) => !full && `max-width: 50%;`}
    }
`
