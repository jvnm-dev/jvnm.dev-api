import React from 'react'

import { NavbarContainer } from '../NavbarContainer'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<NavbarContainer />))
