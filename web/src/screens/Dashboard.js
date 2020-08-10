import React from 'react'

import { Navbar } from '../components/common/navbar'
import { AvailabilitySelector } from '../components/dashboard'


const Dashboard = () => {
  return (
    <>
      <Navbar dashboard />
      <AvailabilitySelector />
    </>
  )
}

export default Dashboard