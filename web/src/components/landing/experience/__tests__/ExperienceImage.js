import React from 'react'

import { ExperienceImage } from '../ExperienceImage'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ExperienceImage />))
