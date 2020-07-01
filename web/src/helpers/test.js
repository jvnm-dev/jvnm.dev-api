import React from 'react'
import toJson from 'enzyme-to-json'
import { act } from 'react-dom/test-utils'
import { mount, shallow } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'

const wait = (time = 0) => new Promise(res => setTimeout(res, time))

export const executeMockProviderTestCase = async (wrapperInstance) => (
  await act(async () => {
    await wait(100)
    wrapperInstance.update()
  })
)

export const shallowMatchSnapshot = (Component) => {
  const wrapper = shallow(Component)
  expect(toJson(wrapper)).toMatchSnapshot()
}

export const mountWrapperWithMockedData = async (Component, mocks) => {
  let wrapper

  act(() => {
    wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        {Component}
      </MockedProvider>
    )
  })

  await executeMockProviderTestCase(wrapper)
  return wrapper
}
