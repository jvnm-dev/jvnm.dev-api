import React from 'react'
import styled, { keyframes } from 'styled-components'

import me from '../../../assets/img/me.jpg'
import { AVAILABILITIES } from '../../../constants'
import { Avatar, Badge, createStyles, withStyles } from '@material-ui/core'
import { IThemeContainer } from '../../../constants/themes'

interface IAvailabilityImage {
    status: number
}

const AvailabilityImageContainer = styled.div`
    position: relative;
`

const Image = styled.img.attrs(() => ({
    loading: 'lazy',
    decoding: 'async',
}))`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    @media only screen and (min-width: 1440px) {
        height: 64px;
        width: 64px;
    }
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
        bottom: -1px;
        right: -1px;
        height: 10px;
        width: 10px;
        border: 1px solid ${({ status }) => getColorFromStatus(status)};
        border-radius: 50%;
        content: ' ';
        animation: ${availabilityRipple} 0.8s infinite ease-in-out;
    }

    @media only screen and (min-width: 1440px) {
        height: 14px;
        width: 14px;

        &:after {
            bottom: 0;
            right: 0;
            height: 12px;
            width: 12px;
        }
    }
`

export const AvailabilityImage = ({ status }: IAvailabilityImage) => {
    return (
        <AvailabilityImageContainer>
            <Image src={me} alt="Jason Van Malder" />
            <AvailabilityIndicator status={status} />
        </AvailabilityImageContainer>
    )
}
