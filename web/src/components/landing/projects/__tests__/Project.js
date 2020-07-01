import React from 'react'

import { Project } from '../Project'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(
  <Project
    data={{
      name: 'prout',
      description: 'prout',
      language: 'proutscript',
      license: 'proutIT',
      url: 'prout.com',
    }}
  />
))
