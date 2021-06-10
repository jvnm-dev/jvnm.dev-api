import styled from 'styled-components'
import { IThemeContainer } from '../../constants/themes'

export const Container = styled.div<{
    flex?: boolean
    fullheight?: boolean
}>`
    display: block;
    ${(props) =>
        props.flex &&
        `
    display: flex;
    justify-content: inherit;
    align-items: inherit;
    flex: 1;
    flex-wrap: wrap;
  `}
    ${(props) =>
        props.fullheight &&
        `
    height: 100%;
  `}
`

export const WavyContainer = styled(Container)`
    background: ${({ theme }: IThemeContainer) => theme.wavyContainer};
    clip-path: url(#wave);
`
