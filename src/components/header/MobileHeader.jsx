import React from 'react'
import { Menu } from './Menu'

import { icons } from '../../constants/assets'
import { useOpen } from '../../hooks/useOpen'

export const MobileHeader = () => {
  const { isOpen, handleIsOpen } = useOpen()
  const { close_icon, menu_icon } = icons
  return (
    <div className='mobile__header'>
    <div className='company'>
      <h3 >Frontend Mentor</h3>
      <h4 className='text--2'>Feedback Board</h4>
    </div>
    <figure className='mobile__memu' onClick={handleIsOpen}>
      <img src={ isOpen ? close_icon : menu_icon } alt="" />
    </figure>

    {
      isOpen && <Menu handleIsOpen={ handleIsOpen }/>
    }
    </div>
  )
}
