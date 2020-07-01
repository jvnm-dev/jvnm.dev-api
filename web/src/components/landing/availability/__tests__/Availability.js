import React from 'react'
import toJson from 'enzyme-to-json'

import { Availability, LAST_AVAILABILITY } from '../Availability'
import { AVAILABILITIES } from '../../../../constants'
import { mountWrapperWithMockedData } from '../../../../helpers/test'

const generateMock = (status) => (
  [{
    request: {
      query: LAST_AVAILABILITY,
    },
    result: {
      data: { lastAvailability: { id: 1, status } },
    },
  }]
)

it('renders correctly when server down/loading', async () => {
  const wrapper = await mountWrapperWithMockedData(
    <Availability />,
    generateMock(AVAILABILITIES.loading)
  )

  expect(wrapper.find('p span').text()).toBe('Maybe available')
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders correctly when available', async () => {
  const wrapper = await mountWrapperWithMockedData(
    <Availability />,
    generateMock(AVAILABILITIES.available)
  )

  expect(wrapper.find('p span').text()).toBe('Available')
})

it('renders correctly when server partially available', async () => {
  const wrapper = await mountWrapperWithMockedData(
    <Availability />,
    generateMock(AVAILABILITIES.partially_available)
  )

  expect(wrapper.find('p span').text()).toBe('Partially available')
})

it('renders correctly when server not available', async () => {
  const wrapper = await mountWrapperWithMockedData(
    <Availability />,
    generateMock(AVAILABILITIES.not_available)
  )

  expect(wrapper.find('p span').text()).toBe('Not available')
})
