import styled from 'styled-components'

export const Column = styled.div<{
    centered?: boolean
    padding?: boolean
}>`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.centered &&
        `
    justify-content: center;
  `}

    ${(props) =>
        props.padding &&
        `
    padding: 24px;
  `}
  
  @media only screen and (min-width: 768px) {
        max-width: 50%;
    }
`
