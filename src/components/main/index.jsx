import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterAll} from '../../actions/filterBy'
import { types } from '../../types/types'
import { Header } from '../header'
import { ShortBy } from '../header/ShortBy'
import { FeedbackCard } from './FeedbackCard'
import { NoFeedback } from './NoFeedback'

export const Home = () => {
  const { filter_all } = types
  const storageData = useSelector(state => state.storage_reducer)

  const filterData = useSelector(state => state.filter_reducer)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const [handleData, setHandleData] = useState([])
  useEffect(() => {
    const loading = setTimeout(() => {
      setLoading(false)
      dispatch(filterAll(storageData))
    }, 300);

    return () => {
      clearTimeout(loading)
    }
  }, [ storageData ])



  useEffect(() => {
    setHandleData(filterData)
  }, [filterData])
  // debugger
  return (
    <section className='feedback__section'>
      <Header />
      <ShortBy />
      {
        loading
        ? <h2>Loading...</h2>
        : filterData.length === 0
          ? <NoFeedback />
          : filterData.map(post => (
            <FeedbackCard key={ post.id } post={ post }/>
          ))
      }
    </section>
  )
}
