//The Home component displays Navbar with the title "Detail View" and a list of habits (Habits) on the main page.
import React from 'react'
import Habits from './Habits'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar name="Detail View"/>
      <Habits/>
    </>
  )
}

export default Home
