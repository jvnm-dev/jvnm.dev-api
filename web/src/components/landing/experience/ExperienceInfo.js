import React, { Fragment } from 'react'

import { Text } from '../../common'
import { ExperiencePlace } from '../'

export const ExperienceInfo = ({ place, from, to }) => {
  return (
    <div>
      <Text small>
        <ExperiencePlace>{place}</ExperiencePlace>
      </Text>
      <Text small bold color='#E1E1E1'>&nbsp;/&nbsp;</Text>
      <Text small bold color='#6057F9'>
        From {from}
      </Text>
      {to && (
        <Fragment>
          <Text small bold color='#E1E1E1'>&nbsp;-&nbsp;</Text>
          <Text small bold color='#ABC5D4'>{to}</Text>
        </Fragment>
      )}
    </div>
  )
}