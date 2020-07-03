import React from 'react'
import toJson from 'enzyme-to-json'

import { Experiences, EXPERIENCES } from '../Experiences'
import { mountWrapperWithMockedData, withReduxProvider } from '../../../../helpers/test'

const mocks = [
  {
    request: {
      query: EXPERIENCES,
    },
    result: {
      data: {
        experiences: [{
          id: 1,
          image: 'prout',
          place: 'github',
          dateFrom: 'web',
          dateTo: 'to',
          role: 'tester',
        }, {
          id: 2,
          image: 'prout2',
          place: 'github2',
          dateFrom: 'web2',
          dateTo: 'to2',
          role: 'tester2',
        }]
      },
    },
  },
]

const convertToProps = (experienceData) => {
  return {
    image: experienceData.image,
    place: experienceData.place,
    from: experienceData.dateFrom,
    to: experienceData.dateTo,
    title: experienceData.role,
  }
}

it('renders correctly with data', async () => {
  const wrapper = await mountWrapperWithMockedData(
    withReduxProvider(<Experiences />),
    mocks
  )

  const experiences = wrapper.find('Experience')
  expect(experiences.length).toBe(2)
  expect(experiences.get(0).props).toStrictEqual(convertToProps(mocks[0].result.data.experiences[0]))
  expect(toJson(wrapper)).toMatchSnapshot()
})
