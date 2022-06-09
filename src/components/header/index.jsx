import React from 'react'
import { background_images, icons } from '../../constants/assets'
import { useOpen } from '../../hooks/useOpen'
import { Menu } from './Menu'

export const Header = () => {
  const { isOpen, handleIsOpen } = useOpen()
  const { close_icon, menu_icon } = icons
  return (
    <header className='header' style={{ backgroundImage: `url(${ background_images.mobile })` }}>
      <div className='company'>
        <h3 className=''>Frontend Mentor</h3>
        <h4 className='text--2'>Feedback Board</h4>
      </div>
      <figure className='mobile__memu' onClick={handleIsOpen}>
        <img src={ isOpen ? close_icon : menu_icon } alt="" />
      </figure>

      {
        isOpen && <Menu />
      }
    </header>
  )
}
