import React from 'react'
import { icons } from '../../constants/assets'

export const ShortBy = () => {
  const { down_arrow_icon, plus_icon, sugg } = icons
  return (
    <div className='short'>
      <div className='short__by'>
        <h4 className='text--2'>Short by: <strong >Most Upvotes</strong></h4>
          <figure>
            <img src={ down_arrow_icon } alt="down" />
          </figure>
      </div>
      <button className='btn purple text--3 btn__add__feedback'>
        <figure>
          <img src={ plus_icon } alt="plus" />
        </figure>
        Add Feedback
      </button>
    </div>
  )
}
