import React from 'react'

import { HeroSection } from '../components/componentsindex'
import Style from '../styles/index.module.css'

const Home = () => {
  return (
    <div className={Style.heroPage}>
      <HeroSection/>
    </div>
  )
}

export default Home