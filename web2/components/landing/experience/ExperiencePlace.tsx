import styled from 'styled-components'
import { Text } from '../../common'

export const ExperiencePlace = styled(Text)`
    font-weight: bolder;
    font-size: 12px;

    @media only screen and (min-width: 768px) {
        font-size: 14px;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
`
