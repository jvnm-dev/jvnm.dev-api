import styled from 'styled-components'
import { IThemeContainer } from '../../../constants/themes'

export const ExperienceContainer = styled.div`
    display: flex;
    margin-top: 24px;
    margin-right: 40px;
    position: relative;
    background-color: ${({ theme }: IThemeContainer) =>
        theme.constrastedBackground};
    padding: 16px;
    border-radius: 8px;
    transition: 0.2s;

    @media only screen and (min-width: 768px) {
        margin-right: 80px;
    }

    /* 
    cursor: pointer;
    &:hover {
      transform: translateX(16px);
    }
   */
`
