import styled from 'styled-components'

export const Section = styled.section`
  min-height: ${({ first }) => first ? 'calc(100vh - 81px - 100px)' : 'calc(100vh - 100px)'};
  display: flex;
  flex-direction: ${({ column }) => column ? 'column' : 'row'};
  justify-content: ${({ horizontallyCentered }) => horizontallyCentered ? 'center' : 'flex-start'};
  align-items: ${({ verticallyCentered }) => verticallyCentered ? 'center' : 'flex-start'};
  padding: 50px 0;
`
