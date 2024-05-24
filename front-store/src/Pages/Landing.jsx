import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import TopProducts from '../components/Products/topProducts'
import AlaUne from '../components/ALaUne/AlaUne'
import NavbarFix from '../components/Navbar/NavbarFix'
import Footer from '../components/Footer/Footer'

const Landing = () => {
  return (
    <div>
      {/* <Navbar/>
      <NavbarFix/> */}
      <Hero/>
      <Category/>
      <TopProducts/>
      <AlaUne/>
      {/* <Footer/> */}
    </div>
  )
}

export default Landing
