import React from 'react'
import { icons } from '../../constants/assets'

export const GoBack = () => {
  const { left_arrow_icon } = icons

  return (
    <button className='btn default--1'>
      <figure>
        <img src={ left_arrow_icon } alt="back" />
      </figure>
      Go Back
    </button>
  )
}
