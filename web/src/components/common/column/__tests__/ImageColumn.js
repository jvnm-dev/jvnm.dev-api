import React from 'react'
import { render } from 'enzyme'

import { ImageColumn } from '../ImageColumn'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<ImageColumn />))

it('props propagated correctly', () => {
  const background = 'prout'
  const wrapper = render(<ImageColumn background={background}/>)
  expect(wrapper.find('img').prop('src')).toBe(background)
})

