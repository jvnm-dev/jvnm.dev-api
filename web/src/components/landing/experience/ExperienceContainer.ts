import styled from 'styled-components'
import {IThemeContainer} from '../../../constants/themes'

export const ExperienceContainer = styled.div`
    display: flex;
    margin-top: 36px;
    @media only screen and (min-width: 1024px) {
      margin-top: 48px;
    }
    /*display: flex;
    margin-top: 36px;
    margin-right: 80px;
    position: relative;

    background-color: ${({ theme }: IThemeContainer) => theme.constrastedBackground};
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
  
    transition: 0.2s;
  
    &:hover {
      transform: translateX(16px);
    }*/
`
