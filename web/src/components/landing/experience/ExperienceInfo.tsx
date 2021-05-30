import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Text } from '../../common'
import { ExperiencePlace } from '../'
import { IExperience } from './Experience'
import {useSelector} from 'react-redux'
import {IThemeReducer} from '../../../redux/slices/themes'
import {THEMES} from '../../../constants'

const ExperienceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`

const DatesContainer = styled.div`
    display: flex;
`

export const ExperienceInfo = ({
    place,
    dateFrom,
    dateTo,
}: Partial<IExperience>) => {
    const theme = useSelector(({ theme }: IThemeReducer) => theme)

    // @ts-ignore
    const selectedTheme = THEMES[theme]
    const fromColor = selectedTheme.title.default

    return (
        <ExperienceInfoContainer>
            <Text small>
                <ExperiencePlace>{place}</ExperiencePlace>
            </Text>
            <Text small bold color="#E1E1E1" mobileInvisible>
                &nbsp;/&nbsp;
            </Text>
            <DatesContainer>
                <Text small bold color={fromColor}>
                    From {dateFrom}
                </Text>
                {dateTo && (
                    <Fragment>
                        <Text small bold color="#D1D1D1">
                            &nbsp;-&nbsp;
                        </Text>
                        <Text small bold color="#6057F9">
                            {dateTo}
                        </Text>
                    </Fragment>
                )}
            </DatesContainer>
        </ExperienceInfoContainer>
    )
}
