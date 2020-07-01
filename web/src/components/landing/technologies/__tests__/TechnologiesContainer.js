import React from 'react'

import { TechnologiesContainer } from '../TechnologiesContainer'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<TechnologiesContainer />))
