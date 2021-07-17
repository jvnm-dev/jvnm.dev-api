import styled from 'styled-components'

export const ExperienceImage = styled.img.attrs(() => ({
    loading: 'lazy',
    decoding: 'async',
}))`
    height: 50px;
    width: 50px;

    @media only screen and (min-width: 1024px) {
        height: 46px;
        width: 46px;
    }

    cursor: pointer;
    border-radius: 5px;
`
