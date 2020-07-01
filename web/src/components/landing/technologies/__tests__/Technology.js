import React from 'react'

import { Technology } from '../Technology'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Technology />))
