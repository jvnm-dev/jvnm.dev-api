import React from 'react'
import toJson from 'enzyme-to-json'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'

import { Projects } from '../Projects'
import { executeMockProviderTestCase } from '../../../../helpers/test'

global.fetch = jest.fn((url) =>
  Promise.resolve({
    json: () => Promise.resolve([{
      id: 'proutid_' + url,
      name: 'proutrepo',
      description: 'proutdescription',
      language: 'proutlanguage',
      license: { spdx_id: 'proutlicense' },
      svn_url: url,
    }]),
  })
)

it('renders correctly with data', async () => {
  let wrapper

  act(() => {
    wrapper = mount(<Projects />)
  })

  await executeMockProviderTestCase(wrapper)
  const projects = wrapper.find('Project')

  expect(fetch).toHaveBeenCalledTimes(2)
  expect(projects.length).toBe(2)
  expect(toJson(wrapper)).toMatchSnapshot()
})
