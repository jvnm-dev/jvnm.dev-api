import React from 'react'

import { Navbar } from '../components/common/navbar/'
import {
  Container,
  Title,
  Text,
  ColumnsContainer,
  Column,
  ImageColumn,
  Button,
  Section
} from '../components/common'

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Container centered>
        <Section>
          <ColumnsContainer>
            <Column>
              <Title>Software<br/>Engineer</Title>
              <Text margin>Currently member of the Odoo bug fix team where I solve problems reported by customers in order to guarantee them the best possible experience.</Text>
              <Button to="/">Learn more</Button>
            </Column>
            <ImageColumn />
          </ColumnsContainer>
        </Section>
      </Container>
    </>
  )
}
