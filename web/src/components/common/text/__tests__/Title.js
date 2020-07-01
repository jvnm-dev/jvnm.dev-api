import React from 'react'

import { Title } from '../Title'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Title />))
