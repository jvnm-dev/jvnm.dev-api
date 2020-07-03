import React from 'react'
import toJson from 'enzyme-to-json'

import { Technologies, TECHNOLOGIES } from '../Technologies'
import { mountWrapperWithMockedData, withReduxProvider } from '../../../../helpers/test'

const mocks = [
  {
    request: {
      query: TECHNOLOGIES,
    },
    result: {
      data: {
        technologies: [{
          id: 1,
          image: 'prout',
          name: 'ProutHolyProut'
        }, {
          id: 2,
          image: 'prout2',
          name: 'ProutML'
        }]
      },
    },
  },
]

it('renders correctly with data', async () => {
  const wrapper = await mountWrapperWithMockedData(
    withReduxProvider(<Technologies />),
    mocks
  )

  const technologies = wrapper.find('Technology')
  expect(technologies.length).toBe(2)
  expect(toJson(wrapper)).toMatchSnapshot()
})
