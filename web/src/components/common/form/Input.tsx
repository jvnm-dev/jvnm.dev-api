import styled from 'styled-components'

export const Input = styled.input`
  padding: 16px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputForeground};
  border: 2px solid ${({ theme }) => theme.inputBackground};
  border-radius: 5px;
  transition: 0.2s;
  outline: 0;
  :focus {
    border-radius: 8px;
    border-color: ${({ theme }) => theme.colorPrimary};
  }
  :first-child {
    margin-top: 24px;
  }
`