import styled from 'styled-components'

export const ColumnsContainer = styled.div<{
    mobileColumn?: boolean
}>`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: ${({ mobileColumn }) => (mobileColumn ? 'column' : 'row')};

    div:first-child {
        padding-left: 0;
    }

    div:last-child {
        padding-right: 0;
    }

    @media only screen and (min-width: 768px) {
        justify-content: flex-start;
        flex-direction: row;
    }
`
