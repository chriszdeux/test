import React, { lazy, useEffect, useState } from 'react'
import image2 from '../../assets/user-images/image-jackson.jpg'
export const CommentHeader = ({ user }) => {
  const { image, name, username } = user;

  const [cleanImage, setCleanImage] = useState()
  useEffect(() => {
    import(`../.${image}`).then(setCleanImage)
  }, [image])
  console.log(cleanImage)
  debugger
  return (
    <div className='comment__header'>
      <div className='comment__user'>
        <figure>
          <img src={ cleanImage } />
        </figure>
        <h4>
          { name }
          <span className='text--2'>{ username }</span>
        </h4>
      </div>

      <button className='btn default--1'>Reply</button>
    </div>
  )
}
