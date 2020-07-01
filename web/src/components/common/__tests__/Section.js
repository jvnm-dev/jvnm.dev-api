import React from 'react'

import { Section } from '../Section'
import { shallowMatchSnapshot } from '../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<Section />))
