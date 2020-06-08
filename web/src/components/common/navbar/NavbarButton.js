import styled from 'styled-components'

import { Button } from '../Button'

export const NavbarButton = styled(Button)`
  padding: 8px 12px 8px 12px;

  @media only screen and (min-width: 1024px) {
    padding: 10px 15px 10px 15px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 10px 20px 10px 20px;
  }
`
