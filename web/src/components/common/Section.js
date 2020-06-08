import styled from 'styled-components'

export const Section = styled.section`
  margin: 0 auto;
  min-height: ${({ first, mobilePadding }) => first ? mobilePadding ? 'calc(100vh - 81px - 200px)' : 'calc(100vh - 81px - 100px)' : 'calc(100vh - 100px)'};
  display: flex;
  flex-direction: ${({ column }) => column ? 'column' : 'row'};
  justify-content: ${({ horizontallyCentered }) => horizontallyCentered ? 'center' : 'flex-start'};
  align-items: ${({ verticallyCentered }) => verticallyCentered ? 'center' : 'flex-start'};
  padding: ${({ mobilePadding }) => mobilePadding ? '80px 24px' : '50px 24px'};

  @media only screen and (min-width: 768px) {
    max-width: 720px;
    padding: 50px 0;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 920px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1200px;
  }
`
