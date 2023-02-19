import React from 'react'
import { BreweryContainer } from './style'
import BreweryCard from './component/breweryCard';


function BreweryPage() {

  return (
    <BreweryContainer>
      <div className='breweryContent'>
        <BreweryCard />
      </div>
    </BreweryContainer>
  )
}

export default BreweryPage