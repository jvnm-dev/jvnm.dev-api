import React from 'react'

import { NavbarMenuItem } from '../NavbarMenuItem'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<NavbarMenuItem />))
