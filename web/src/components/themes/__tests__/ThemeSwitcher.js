import React from 'react'

import { ThemeSwitcher } from '../ThemeSwitcher'
import { shallowMatchSnapshot, withReduxProvider } from '../../../helpers/test'

it('renders correctly', () => (
  shallowMatchSnapshot(
    withReduxProvider(
      <ThemeSwitcher />)
    )
  )
)
