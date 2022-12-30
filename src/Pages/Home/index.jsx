import React from 'react'
import { HomeWrapper } from './style'
import ProductSection from './Components/Product'
import HomeBanner from './Components/HomeBanner';
import HomeQuestionSection from './Components/Question';


function HomePage() {
  return (
    <HomeWrapper>
    <>
      <HomeBanner/>
      <ProductSection />
      <HomeQuestionSection />
    </>
    </HomeWrapper>
  )
}

export default HomePage