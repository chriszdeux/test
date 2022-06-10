import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../header'
import { ShortBy } from '../header/ShortBy'
import { FeedbackCard } from './FeedbackCard'

export const Home = () => {
  const generalData = useSelector(state => state.filter_reducer)
  const { productRequests } = generalData.length > 0 && generalData[0]
  debugger
  const [loading, setLoading] = useState(true)
  
  // useEffect(() => {
  //   const loading = setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);

  //   return () => {
  //     clearTimeout(loading)
  //   }
  // }, [ generalData ])
  // debugger
  return (
    <section className='feedback__section'>
      <Header />
      <ShortBy />
      {/* {
        loading
        ? <h2>Loading...</h2>
        : productRequests.map(post => (
          <FeedbackCard key={ post.id } post={ post }/>
        ))
      } */}
    </section>
  )
}
