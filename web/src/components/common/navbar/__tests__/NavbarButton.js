import React from 'react'
import { shallow } from 'enzyme'

import { NavbarButton } from '../NavbarButton'
import { shallowMatchSnapshot } from '../../../../helpers/test'

it('renders correctly', () => shallowMatchSnapshot(<NavbarButton to='/' />))

it('onClick callback executed', () => {
  const mockOnClick = jest.fn()
  const wrapper = shallow(<NavbarButton to='/' onClick={mockOnClick} />)
  wrapper.at(0).simulate('click')
  expect(mockOnClick).toHaveBeenCalled()
})
