import React from 'react'

import { ErrorImage } from '../ErrorImage'
import { shallowMatchSnapshot } from '../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ErrorImage />))
