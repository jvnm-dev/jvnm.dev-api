import React  from 'react'

import { Navbar } from '../components/common/navbar'
import { Container, Section } from '../components/common'
import { Journey } from '../components/landing/journey/Journey'
import { useParams } from 'react-router'

export const JourneyScreen = () => {
  const { id } = useParams()

  return (
    <>
      <Navbar />
      <Container>
        <Journey id={Number(id)} />
      </Container>
    </>
  )
}

export default JourneyScreen
