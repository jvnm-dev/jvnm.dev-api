import React from 'react'

import { ExperienceTitle } from '../ExperienceTitle'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ExperienceTitle />))
