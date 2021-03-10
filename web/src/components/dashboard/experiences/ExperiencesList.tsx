import { Title } from '../../common'
import { Experiences } from '../../landing'
import React from 'react'
import { Flex } from '../common/Flex.tsx'

export const ExperiencesList = (): JSX.Element => (
    <>
        <Title small style={{ margin: '20px 0 20px 0' }}>
            Education &amp; Experiences
        </Title>
        <Flex alignItems="center">
            <Experiences dashboard />
        </Flex>
    </>
)
