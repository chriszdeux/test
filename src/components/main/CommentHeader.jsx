import React from 'react'
import image from '../../assets/user-images/image-anne.jpg'

export const CommentHeader = () => {
  return (
    <div className='comment__header'>
      <div className='comment__user'>
        <figure>
          <img src={ image } alt="profile" />
        </figure>
        <h4>
          Elija Moss
          <span className='text--2'>@hexaong.power</span>
        </h4>
      </div>

      <button className='btn default--1'>Reply</button>
    </div>
  )
}
