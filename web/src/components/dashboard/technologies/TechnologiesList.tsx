import { Section, Title } from '../../common'
import { Technologies } from '../../landing'
import React from 'react'
import { Flex } from '../common/Flex'

export const TechnologiesList = (): JSX.Element => (
    <>
        <Title small style={{ margin: '20px 0 20px 0' }}>
            Technologies
        </Title>
        <Flex alignItems="center">
            <Technologies dashboard />
        </Flex>
    </>
)
