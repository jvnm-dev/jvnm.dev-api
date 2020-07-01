import React from 'react'

import { AvailabilityContainer } from '../AvailabilityContainer'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<AvailabilityContainer />))
