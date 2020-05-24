import styled from 'styled-components'

export const Section = styled.div`
  min-height: ${({ first }) => first ? 'calc(100vh - 81px - 100px)' : 'calc(100vh - 100px)'};
  display: flex;
  justify-content: ${({ horizontallyCentered }) => horizontallyCentered ? 'center' : 'initial'};
  align-items: center;
  padding: 50px 0;
`
