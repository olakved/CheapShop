import React, { useState, useEffect } from 'react'
import NewsPage from './newsCard'
import { newsUrl } from '../../api'
import './style.css'

//slice is use for reducing the length of object in an array or elements of an array.

function Pictures() {
  const [adata, setData] = useState()
  const [loading, setLoading] = useState(false)
  const news = adata?.articles

  const fetchDataA = async () => {
    const data = await (await fetch(newsUrl)).json()
    setData(data)
  }

  useEffect(() => {
    setLoading(true)
    fetchDataA()
    setLoading(false)

  }, [])


  return (
    <div className="newsContainer">
      
        {/* <h1>My News page</h1> */}
        {
          loading ? 
          <p style={{backgroundColor: 'pink'}}>Please wait while it loads ....</p> 
          : <div className='newsWrap'>
             <h1 className='newsPageTitle'>My News page</h1>
          <div className='boxes'>
          {news?.map((newsCard, index) => (
              <div key={index}>
                  <NewsPage availableNews={newsCard} />
              </div>
  
          ))}
          </div>
  
  
        </div>
        }
   
    </div>
  );
}

export default Pictures;
