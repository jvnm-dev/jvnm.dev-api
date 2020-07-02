import React from 'react'

import { ErrorDetailsSummary } from '../ErrorDetailsSummary'
import { shallowMatchSnapshot } from '../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ErrorDetailsSummary />))
