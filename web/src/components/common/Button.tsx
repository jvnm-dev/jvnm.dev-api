import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button as MuiButton } from '@material-ui/core'
import { IThemeContainer } from '../../constants/themes'

export const Button = styled(MuiButton).attrs({
    component: Link,
    variant: 'contained',
})<{
    width?: string
    small?: boolean
    to?: string
}>`
    height: fit-content;
    display: inline-block;
    color: #fff !important;
    background: linear-gradient(
        135deg,
        ${({ theme }: IThemeContainer) => theme.colorPrimary} 0%,
        ${({ theme }: IThemeContainer) => theme.colorSecondary}
    );
    box-shadow: 0 0 10px 0 rgba(28, 28, 28, 0.25);
    font-weight: bold;
    padding: 10px 25px 10px 25px;
    text-transform: initial;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.2s;
    text-align: center;
    width: ${({ width }) =>
        width === 'full' ? 'calc(100% - 50px);' : 'fit-content'};

    &[disabled] {
        background: linear-gradient(
            135deg,
            rgb(167 167 167) 0%,
            rgb(222 222 222) 100%
        );
    }

    :hover {
        transform: translateY(-1px);
        box-shadow: 0 0 15px 0 rgba(28, 28, 28, 0.3);
    }

    @media only screen and (min-width: 1024px) {
        padding: 8px 20px 8px 20px;
        width: ${({ width }) => (width === 'full' ? '100%' : 'fit-content')};
    }

    @media only screen and (min-width: 1440px) {
        padding: 10px 25px 10px 25px;
        width: ${({ width }) => (width === 'full' ? '100%' : 'fit-content')};
    }
`
