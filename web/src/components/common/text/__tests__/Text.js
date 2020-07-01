import React from 'react'

import { Text } from '../Text'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Text />))
