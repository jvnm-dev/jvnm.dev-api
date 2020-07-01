import React from 'react'

import { AvailabilityImage } from '../AvailabilityImage'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<AvailabilityImage />))
