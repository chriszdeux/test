import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { feedbackSelected } from '../../actions/feedbackSelected'
import { icons } from '../../constants/assets'

export const CardInteraction = ({ post }) => {
  const { upvotes, comments } = post
  // debugger
  const { up_arrow_icon, comments_icon } = icons
  const navigate = useNavigate()

  const dispatch = useDispatch()
  
  const handleFeedback = () => {
    dispatch(feedbackSelected(post))
    navigate('/feedback')
  }
  return (
    <div className='card__interaction'>
      <button className='btn votes default--1'>
        <figure>
          <img src={ up_arrow_icon } alt="" />
        </figure>
        { upvotes }
      </button>

      <figure className='comments__counter' onClick={ handleFeedback }>
          <img src={ comments_icon } alt="" />
          <figcaption>{ comments?.length }</figcaption>
      </figure>
    </div>
  )
}
