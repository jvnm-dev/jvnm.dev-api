import React, {ChangeEvent, useRef, useState} from 'react'
import styled from 'styled-components'
import {Button, Text} from '../../common'
import {ToolHeader} from '../../../screens/Tools.tsx'

const Column = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
    margin-top: 16px;
    display: flex;
    width: 100%;
    flex: 1;
`

const Image = styled.img`
  width: 100%;
`

export const Base64ToImage = () => {
    const [b64, setB64] = useState(null)

    const fillImage = async (e: Event) => {
        e.preventDefault()
        const clipboardData = await navigator.clipboard.readText()
        setB64(clipboardData)
    }

    return (
        <>
            <ToolHeader>
                <Button small='true' to='b64' onClick={fillImage}>
                    Load image from clipboard
                </Button>
            </ToolHeader>

            <Container>
                <Column>
                    <Image src={b64} alt='' />
                </Column>
            </Container>
        </>
    )
}