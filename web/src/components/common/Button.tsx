import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button as MuiButton } from '@material-ui/core'

export const Button = styled(MuiButton).attrs({
    component: Link,
})<{
    width?: string
    small?: boolean
}>`
    height: fit-content;
    display: inline-block;
    color: #fff !important;
    background: linear-gradient(
        135deg,
        rgba(90, 81, 250, 1) 0%,
        rgba(179, 204, 210, 1) 100%,
        rgba(0, 212, 255, 1) 100%
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
