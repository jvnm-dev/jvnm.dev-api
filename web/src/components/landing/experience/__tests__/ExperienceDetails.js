import React from 'react'

import { ExperienceDetails } from '../ExperienceDetails'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ExperienceDetails />))
