import React from 'react'

import { NavbarMenu } from '../NavbarMenu'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<NavbarMenu />))
