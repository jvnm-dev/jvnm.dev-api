import React from 'react'

import { Navbar } from '../Navbar'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Navbar />))
