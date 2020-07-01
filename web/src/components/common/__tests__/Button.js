import React from 'react'

import { Button } from '../Button'
import { shallowMatchSnapshot } from '../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Button to='/' />))
