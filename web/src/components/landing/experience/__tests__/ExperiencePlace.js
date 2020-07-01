import React from 'react'

import { ExperiencePlace } from '../ExperiencePlace'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ExperiencePlace />))
