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

const AvailabilityIndicator = styled.span<IAvailabilityImage>`
    position: absolute;
    bottom: 5px;
    right: 0;
    height: 10px;
    width: 10px;
    background-color: ${({ status }) => getColorFromStatus(status)};
    border: 2px solid ${({ theme }: IThemeContainer) => theme.background};
    border-radius: 50%;

    &:after {
        position: absolute;
        bottom: -0.8px;
        right: -0.8px;
        height: 6px;
        width: 6px;
        border: 1px solid ${({ status }) => getColorFromStatus(status)};
        border-radius: 50%;
        content: ' ';
        animation: ${availabilityRipple} 0.8s infinite ease-in-out;
    }

    @media only screen and (min-width: 1440px) {
        bottom: 5px;
        right: -2px;
        height: 16px;
        width: 16px;

        &:after {
            height: 12px;
            width: 12px;
        }
    }
`

export const AvailabilityImage = ({ status }: IAvailabilityImage) => {
    return (
        <AvailabilityImageContainer>
            <StyledImage src="/me.jpg" alt="Jason Van Malder" />
            <AvailabilityIndicator status={status} />
        </AvailabilityImageContainer>
    )
}
