import styled from 'styled-components'

export const ExperienceImage = styled.img.attrs(() => ({
    loading: 'lazy',
    decoding: 'async',
}))<{
    dashboard?: boolean
}>`
    height: ${({ dashboard }) => (!dashboard ? '50px' : '80px')};
    width: ${({ dashboard }) => (!dashboard ? '50px' : '80px')};

    @media only screen and (min-width: 1024px) {
        height: ${({ dashboard }) => (!dashboard ? '46px' : '80px')};
        width: ${({ dashboard }) => (!dashboard ? '46px' : '80px')};
    }

    margin-right: ${({ dashboard }) => (dashboard ? '10px' : '0')};
    cursor: ${({ dashboard }) => (dashboard ? 'pointer' : 'initial')};
`
