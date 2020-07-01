import React from 'react'

import { ExperienceInfo } from '../ExperienceInfo'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ExperienceInfo />))
