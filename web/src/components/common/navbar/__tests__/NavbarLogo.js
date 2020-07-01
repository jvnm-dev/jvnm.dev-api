import React from 'react'

import { NavbarLogo } from '../NavbarLogo'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<NavbarLogo to='/' />))
