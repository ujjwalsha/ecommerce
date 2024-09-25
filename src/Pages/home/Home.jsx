import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import myContext from '../../Context/data/myContext'
import Herosection from '../../Components/Herosection/Herosection'
import Filter from '../../Components/Filter/Filter'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Track from '../../Components/Track/Track'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Home = () => {
  return (
    <Layout>
      <Herosection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      {/* <Testimonials/> */}
    </Layout>
  )
}

export default Home
