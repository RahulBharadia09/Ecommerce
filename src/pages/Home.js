import React from 'react'
import AdvanceProduct from './AdvanceProduct'
import BlogCard from './BlogCard'
import Carousal from './Carousal'
import Category from './Category'
import FeatureProducts from './FeatureProducts'
import LatestProduct from './LatestProduct'
import LineCarousal from './LineCarousal'
import PopularProducts from './PopularProducts'

import Services from './Services'

const Home = () => {
  return (
    <div>
      <Carousal/>
      <Services/>
      <PopularProducts/>
      <Category/>
      <LineCarousal/>
      <FeatureProducts/>
      <BlogCard/>
      <AdvanceProduct/>
      <LatestProduct/>
     
    </div>
  )
}

export default Home
