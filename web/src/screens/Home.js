import React, { useRef } from 'react'
import Fade from 'react-reveal/Fade'

import computerImage from '../assets/img/computer.jpeg'
import {
  WaveClipPath,
} from '../components/common/svg'
import {
  Container,
  WavyContainer,
  Title,
  Text,
  Button,
  Section,
} from '../components/common'
import {
  ColumnsContainer,
  Column,
  ImageColumn,
} from '../components/common/column'
import { Navbar } from '../components/common/navbar/'
import {
  Availability,
  Experiences,
  Technologies,
  Projects,
} from '../components/landing'

export const Home = () => {
  const secondSection = useRef(null)

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: secondSection.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Navbar />
      <Container>
        <Section
          first
          horizontallyCentered
          verticallyCentered
        >
          <ColumnsContainer>
            <Column padding centered>
                <Fade>
                  <Title>Software Engineer</Title>
                  <Text margin>
                    Currently member of the Odoo bug fix team where I solve problems
                    reported by customers in order to guarantee them the best possible
                    experience.
                  </Text>
                  <Button to='/' onClick={handleLearnMoreClick}>Learn more</Button>
                  <Availability />
                </Fade>
            </Column>
            <ImageColumn background={computerImage} />
          </ColumnsContainer>
        </Section>
        <Section
          horizontallyCentered
          verticallyCentered
          ref={secondSection}
        >
          <ColumnsContainer mobileColumn>
            <Column>
              <Title small>Education &amp; Experiences</Title>
              <Experiences />
            </Column>
            <Column>
              <Title small marginMobile>Technologies I work with</Title>
              <Technologies />
            </Column>
          </ColumnsContainer>
        </Section>
      </Container>
      <WaveClipPath />
      <WavyContainer>
        <Section
          column
          horizontallyCentered
          mobilePadding
        >
          <Title small inverse>Side projects</Title>
          <Projects />
        </Section>
      </WavyContainer>
    </>
  )
}
