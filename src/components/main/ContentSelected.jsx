import React from 'react'

export const ContentSelected = ({ data }) => {
  const { title, description, category } = data
  return (
    <div className='content'>
      <h4>{ title }</h4>
      <p className='text--2'>{ description }</p>
      <button className='btn default--1'>{ category }</button>
    </div>
  )
}
