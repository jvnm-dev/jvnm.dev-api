import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        max-width: 740px;
        padding: 0;
    }

    @media only screen and (min-width: 1024px) {
        max-width: 920px;
    }

    @media only screen and (min-width: 1440px) {
        max-width: 1200px;
    }
`
