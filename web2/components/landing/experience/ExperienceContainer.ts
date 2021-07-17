import styled from 'styled-components'
import { IThemeContainer } from '../../../constants/themes'

export const ExperienceContainer = styled.div`
    display: flex;
    margin-top: 24px;
    margin-right: 80px;
    position: relative;

    background-color: ${({ theme }: IThemeContainer) =>
        theme.constrastedBackground};
    padding: 16px;
    border-radius: 8px;

    transition: 0.2s;

    /* 
    cursor: pointer;
    &:hover {
      transform: translateX(16px);
    }
   */
`
