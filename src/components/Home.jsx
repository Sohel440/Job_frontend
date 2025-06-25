import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import Category from './Category'
import LatestJob from './LatestJob'
import Footer from './Footer'
import UseGetAllJobs from '../hooks/UseGetAllJobs'

const Home = () => {
  UseGetAllJobs();
  return (
    <div>
      <Navbar/>
      <HeroSection/>
     <Category/>
   <LatestJob/>
         <Footer/>
    </div>
  )
}

export default Home
