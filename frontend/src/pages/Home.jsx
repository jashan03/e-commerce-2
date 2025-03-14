
import React from 'react'
import Appbar from '../components/Appbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import BlogSection from '../components/BlogSection'

const Home = () => {
  return (
    <div>
      <Appbar></Appbar>
      <Announcement></Announcement>
      <Slider/>
      <Categories/>
      <Products></Products>
      <BlogSection></BlogSection>
      <Newsletter></Newsletter>
      <Footer/>
    
    </div>
  )
}

export default Home
