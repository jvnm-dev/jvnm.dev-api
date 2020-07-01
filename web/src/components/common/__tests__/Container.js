import React from 'react'

import { Container } from '../Container'
import { shallowMatchSnapshot } from '../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Container />))

