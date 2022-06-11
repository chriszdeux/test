import React from 'react'
import { useNavigate } from 'react-router-dom'
import { icons } from '../../constants/assets'

export const GoBack = () => {
  const { left_arrow_icon } = icons
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/test')
  }
  return (
    <button className='btn default--1' onClick={goHome}>
      <figure>
        <img src={ left_arrow_icon } alt="back" />
      </figure>
      Go Back
    </button>
  )
}
