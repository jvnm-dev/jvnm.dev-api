import React from 'react'

import { ExperienceContainer } from '../ExperienceContainer'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ExperienceContainer />))
