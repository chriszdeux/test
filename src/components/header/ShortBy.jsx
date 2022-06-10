import React from 'react'
import { icons } from '../../constants/assets'
import { AddFeedbackButton } from './AddFeedbackButton'

export const ShortBy = () => {
  const { down_arrow_icon, plus_icon, suggestion_icon } = icons
  return (
    <div className='short'>
      <div className='short__by'>
        <figure className='suggested--icon'>
          <img src={ suggestion_icon } alt="suggestion" />
        </figure>
        <h2 className=''> <span>4</span> Suggestions</h2>
        <h4 className='text--2'>Short by: <strong >Most Upvotes</strong></h4>
        <figure>
          <img src={ down_arrow_icon } alt="down" />
        </figure>
      </div>
      <AddFeedbackButton />
    </div>
  )
}
