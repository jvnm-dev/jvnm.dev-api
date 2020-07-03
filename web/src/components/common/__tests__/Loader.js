import React from 'react'

import { Loader } from '../Loader'
import { shallowMatchSnapshot } from '../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Loader />))
