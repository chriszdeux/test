import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FeedbackCard } from './FeedbackCard'

export const MainFeedback = () => {
  const storageData = useSelector(state => state.storage_reducer)
  const { productRequests } = storageData.length > 0 && storageData[0]
  // debugger
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const loading = setTimeout(() => {
      setLoading(false)
    }, 2000);

    return () => {
      clearTimeout(loading)
    }
  }, [ storageData ])
  // debugger
  return (
    <section className='feedback__section'>
      {
        loading
        ? <h2>Loading...</h2>
        : productRequests.map(post => (
          <FeedbackCard key={ post.id } post={ post }/>
        ))
      }
    </section>
  )
}
