import React from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

import { AVAILABILITIES } from '../../../constants'
import { Avatar, Badge, createStyles, withStyles } from '@material-ui/core'
import { IThemeContainer } from '../../../constants/themes'

interface IAvailabilityImage {
    status: number
}

const AvailabilityImageContainer = styled.div`
    position: relative;

    height: 48px;
    width: 48px;

    @media only screen and (min-width: 1440px) {
        height: 64px;
        width: 64px;
    }
`

const StyledImage = styled(Image).attrs(() => ({
    layout: 'fill',
}))`
    border-radius: 50%;
`

const getColorFromStatus = (status: number) =>
    status === AVAILABILITIES.available
        ? '#6DC36D'
        : status === AVAILABILITIES.partially_available
        ? 'orange'
        : status === AVAILABILITIES.not_available
        ? '#ec5a5a'
        : 'grey'

const availabilityRipple = keyframes`
  from {
    transform: scale(.8);
    opacity: 1;
  }

  to {
    transform: scale(2.4);
    opacity: 0;
  }
`

const AvailabilityIndicatorContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: -5px;
    width: 20px;
    height: 20px;
`

const AvailabilityIndicator = styled.span<IAvailabilityImage>`
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${({ status }) => getColorFromStatus(status)};
    border: 2px solid ${({ theme }: IThemeContainer) => theme.background};
    border-radius: 50%;

    &:after {
        animation: ${availabilityRipple} 0.8s infinite ease-in-out;
        border: 1px solid ${({ status }) => getColorFromStatus(status)};
        border-radius: 50%;
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
    }
`

export const AvailabilityImage = ({ status }: IAvailabilityImage) => {
    return (
        <AvailabilityImageContainer>
            <StyledImage src="/me.jpg" alt="Jason Van Malder" />
            <AvailabilityIndicatorContainer>
                <AvailabilityIndicator status={status} />
            </AvailabilityIndicatorContainer>
        </AvailabilityImageContainer>
    )
}
