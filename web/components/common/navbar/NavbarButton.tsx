import styled from 'styled-components'

import { Button } from '../Button'
import { device } from '../../../constants/responsive'

export const NavbarButton = styled(Button)`
    padding: 8px 12px 8px 12px;

    @media ${device.laptopL} {
        padding: 10px 15px 10px 15px;
    }

    @media ${device.desktop} {
        padding: 8px 20px 8px 20px;
    }

    @media ${device.mobileL} {
        display: none;
    }
`

export const NavbarButtons = styled.div`
    ${NavbarButton}:not(:first-child) {
        margin-right: 8px;
    }
`
