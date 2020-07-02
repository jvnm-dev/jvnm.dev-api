import React from 'react'
import toJson from 'enzyme-to-json'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'

import { ErrorBoundary } from '../ErrorBoundary'
import { executeMockProviderTestCase } from '../../../helpers/test'

it('renders correctly an error', async () => {
  let wrapper

  act(() => {
    wrapper = mount(<ErrorBoundary><div id='prout'/></ErrorBoundary>)
  })

  wrapper.setState({
    error: 'Very big error',
    errorInfo: { componentStack: 'prout' },
    isDebug: true,
  })

  await executeMockProviderTestCase(wrapper)
  expect(wrapper.text().indexOf('Something went wrong')).not.toBe(-1)
  expect(wrapper.text().indexOf('Details')).not.toBe(-1)
  expect(toJson(wrapper)).toMatchSnapshot()
})

