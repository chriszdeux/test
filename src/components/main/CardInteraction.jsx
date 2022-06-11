import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { feedbackSelected } from '../../actions/feedbackSelected'
import { addVote, removeVote } from '../../actions/storageData'
import { icons } from '../../constants/assets'

const votedStyle = {
  backgroundColor: '#62BCFA',
  color: '#F7F8FD'
}

export const CardInteraction = ({ post }) => {
  const { upvotes, comments } = post
  // debugger
  const { up_arrow_icon, comments_icon } = icons
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const refVoted = useRef(null)
  
  const handleFeedback = () => {
    dispatch(feedbackSelected(post))
    navigate('/test/feedback')
  }

  const handleAddVote = () => {
    dispatch(addVote(post))
  }
  const handleRemoveVote = () => {
    dispatch(removeVote(post))
  }

  useEffect(() => {
    if(post?.voted) refVoted.current.disabled = true;
  }, [ post ])
  // debugger
  return (
    <div className='card__interaction'>
      <button className='btn votes default--1' onClick={  handleAddVote } ref={ refVoted } style={ post?.voted && votedStyle }>
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
