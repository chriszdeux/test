import React, { lazy, useEffect, useState } from 'react'

export const CommentHeader = ({ user }) => {
  const { image, name, username } = user;

  return (
    <div className='comment__header'>
      <div className='comment__user'>
        <figure>
          <img src={ image } />
        </figure>
        <h4>
          { name }
          <span className='text--2'>@{ username }</span>
        </h4>
      </div>

      <button className='btn default--1'>Reply</button>
    </div>
  )
}
