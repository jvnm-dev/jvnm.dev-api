import React, {ChangeEvent, useRef, useState} from 'react'
import {Navbar} from '../components/common/navbar'
import {Button, Container, Loader, Section, Title} from '../components/common'
import styled from 'styled-components'
import {ImageToBase64} from '../components/tools/imageToBase64/ImageToBase64'
import {Base64ToImage} from '../components/tools/imageToBase64/Base64ToImage'

const TabsContainer = styled.div`
  display: flex;
  width: 100%;

  ${Button}:first-child {
    margin-right: 8px;
  }

  ${Button}:last-child {
    margin-left: 8px;
  }
  
  ${Button} {
    flex: 1;
  }
`

export const ToolHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 16px 0;
`

enum TABS {
    IMAGE_TO_B64 = 'ito64',
    B64_TO_IMAGE = '64toi',
}

export const Tools = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState(TABS.IMAGE_TO_B64)

    const handleTabChangeClick = (e: MouseEvent) => {
        e.preventDefault()

        const target = e.target as HTMLElement
        setActiveTab(target.dataset.tab)
    }

    return <>
        <Navbar />
        <Container>
            <Section column>
                <TabsContainer>
                    <Button to='b64' data-tab={TABS.IMAGE_TO_B64} onClick={handleTabChangeClick} disabled={activeTab === TABS.B64_TO_IMAGE}>Image to base64</Button>
                    <Button to='b64' data-tab={TABS.B64_TO_IMAGE} onClick={handleTabChangeClick} disabled={activeTab === TABS.IMAGE_TO_B64}>Base64 to image</Button>
                </TabsContainer>

                {
                    activeTab === TABS.IMAGE_TO_B64 && (
                        <ImageToBase64 />
                    )
                }

                {
                    activeTab === TABS.B64_TO_IMAGE && (
                        <Base64ToImage />
                    )
                }
            </Section>
        </Container>
    </>
}