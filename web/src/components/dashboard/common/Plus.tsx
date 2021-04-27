import styled from 'styled-components'
import React from 'react'

export const Plus = ({ margin }: { margin?: string }): JSX.Element => {
    const Box = styled.div`
        margin: ${margin};
        height: 80px;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const PlusContainer = styled.div`
        background-color: #eaeaea;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        font-weight: bold;
        cursor: pointer;
    `

    return (
        <Box>
            <PlusContainer>+</PlusContainer>
        </Box>
    )
}
