import React from 'react'

export const CardContent = ({post}) => {
  const { description, category, title } = post
  return (
    <div className='content'>
      <h4>{ title }</h4>
      <p className='text--2'>{ description }</p>
      <button className='btn default--1'>{ category }</button>
    </div>
  )
}
