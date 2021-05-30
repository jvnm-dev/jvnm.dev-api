import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import { gql } from 'apollo-boost'
import {useQuery, QueryResult} from '@apollo/react-hooks'
import {IExperience} from '../experience/Experience'
import styled from 'styled-components'
import {IThemeContainer} from '../../../constants/themes'

import hehBackground from '../../../assets/img/experience-1.jpg'
import shipprBackground from '../../../assets/img/experience-2.png'
import odooBackground from '../../../assets/img/experience-3.jpeg'
import extiaBackground from '../../../assets/img/experience-4.jpg'

export const JOURNEY = gql`
    query journey($id: Int!) {
        journey(id: $id) {
            id,
            description,
            experience {
                place
            }
        }
    }
`

interface IOwnProps {
  id: number
}

interface IJourney {
  journey: {
    id: number,
    experience: Partial<IExperience>
    description: string
  }
}

const JourneyContainer = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 920px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1200px;
  }
  
  margin: 0 auto;
  color: ${({ theme }: IThemeContainer) => theme.text};
  
  p {
    font-size: 20px;
  }
  
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 36px;
  }
  
  h3 {
    font-size: 30px;
  }
  
  h4 {
    font-size: 26px;
  }
`

interface IJourneyHeaderProps {
 background: string
}

const JourneyHeader = styled.div`
  padding: 150px;
  background: url(${({ background }: IJourneyHeaderProps) => background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  color: #fff;
`

const JourneyOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
          135deg,
          rgba(90, 81, 250, 0.8) 0%,
          rgba(179, 204, 210, 0.8) 100%,
          rgba(0, 212, 255, 0.8) 100%
  );
  height: 100%;
  width: 100%;
`

const JourneyTitle = styled.h1`
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  font-size: 50px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Journey = ({ id }: IOwnProps) => {
  const { loading, error, data }: QueryResult<IJourney> = useQuery(JOURNEY, {
    variables: { id },
  })

  const [background, setBackground] = useState('')

  useEffect(() => {
    if (data?.journey) {
      switch (data?.journey.id) {
        case 1:
          setBackground(hehBackground)
          break
        case 2:
          setBackground(shipprBackground)
          break
        case 3:
          setBackground(odooBackground)
          break
        case 4:
          setBackground(extiaBackground)
          break
      }
    }
  }, [data])

  if (loading) return <></>
  if (error) throw error

  const journey = data?.journey

  return (
    <>
      <JourneyHeader background={background}>
        <JourneyOverlay />
        <JourneyTitle>My journey at {journey?.experience.place}</JourneyTitle>
      </JourneyHeader>
      <JourneyContainer>
        <ReactMarkdown>{journey?.description ?? ''}</ReactMarkdown>
      </JourneyContainer>
    </>
  )
}