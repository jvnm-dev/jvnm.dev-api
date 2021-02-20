import styled from 'styled-components'
import { Button } from '../Button'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${Button} {
    margin-bottom: 16px;
  }
`