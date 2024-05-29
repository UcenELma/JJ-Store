import React from 'react'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import TopProducts from '../components/Products/topProducts'
import AlaUne from '../components/ALaUne/AlaUne'
import FeaturedProducts from '../components/Products/FeaturedProducts'
import BreakingNews from '../components/Products/BreakingNews'
import LatestArticles from '../components/Articles/LatestArticles'

const Landing = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <TopProducts/>
      <BreakingNews/>
      <FeaturedProducts/>
      <AlaUne/>
      <LatestArticles/>
    </div>
  )
}

export default Landing
