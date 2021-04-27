import styled from 'styled-components'
import {IThemeContainer} from '../../../constants/themes'

export const Input = styled.input`
    padding: 16px;
    margin-bottom: 24px;
    background-color: ${({ theme }: IThemeContainer) => theme.inputBackground};
    color: ${({ theme }: IThemeContainer) => theme.inputForeground};
    border: 2px solid ${({ theme }: IThemeContainer) => theme.inputBackground};
    border-radius: 5px;
    transition: 0.2s;
    outline: 0;
    :focus {
        border-radius: 8px;
        border-color: ${({ theme }: IThemeContainer) => theme.colorPrimary};
    }
    :first-child {
        margin-top: 24px;
    }
`
