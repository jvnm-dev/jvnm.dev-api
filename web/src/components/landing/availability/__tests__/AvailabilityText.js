import React from 'react'

import { AvailabilityText } from '../AvailabilityText'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<AvailabilityText />))
