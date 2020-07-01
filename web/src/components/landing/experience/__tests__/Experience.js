import React from 'react'

import { Experience } from '../Experience'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Experience />))
