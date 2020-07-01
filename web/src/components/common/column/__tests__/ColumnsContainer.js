import React from 'react'

import { ColumnsContainer } from '../ColumnsContainer'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ColumnsContainer />))
