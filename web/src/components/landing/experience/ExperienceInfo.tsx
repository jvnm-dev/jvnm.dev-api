import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Text } from '../../common'
import { ExperiencePlace } from '../'
import { IExperience } from './Experience'

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
    return (
        <ExperienceInfoContainer>
            <Text small>
                <ExperiencePlace>{place}</ExperiencePlace>
            </Text>
            <Text small bold color="#E1E1E1" mobileInvisible>
                &nbsp;/&nbsp;
            </Text>
            <DatesContainer>
                <Text small bold color="#6057F9">
                    From {dateFrom}
                </Text>
                {dateTo && (
                    <Fragment>
                        <Text small bold color="#E1E1E1">
                            &nbsp;-&nbsp;
                        </Text>
                        <Text small bold color="#597A82">
                            {dateTo}
                        </Text>
                    </Fragment>
                )}
            </DatesContainer>
        </ExperienceInfoContainer>
    )
}
