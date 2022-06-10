import React, { useEffect, useState } from 'react'
import { FeedbackCard } from './FeedbackCard'
import { FeedbackComments } from './FeedbackComments'
import { FeedbackDetailsHeader } from './FeedbackDetailsHeader'
import { FormPostComment } from '../forms/FormPostComment'
import { FeedbackCardSelected } from './FeedbackCardSelected'
import { useSelector } from 'react-redux'

export const FeedbackDetails = () => {
  const dataStorage = useSelector(state => state.storage_reducer)
  const { productRequests } = dataStorage.length > 0 && dataStorage[0]
  const [data, setData] = useState([])

  useEffect(() => {
    setData(productRequests[4])
  }, [  dataStorage ])
  return (
    <section className='feedback__details'>
      <FeedbackDetailsHeader />
      <FeedbackCardSelected data={ data }/>
      <FeedbackComments data={ data }/>
      <FormPostComment />
    </section>
  )
}
