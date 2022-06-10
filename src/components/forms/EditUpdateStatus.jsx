import React from 'react'
import { icons } from '../../constants/assets'
import { useOpen } from '../../hooks/useOpen'
import { DropdownList } from './DropdownList'

export const EditUpdateStatus = () => {
  const { isOpen, handleIsOpen } = useOpen()
  const { down_arrow_icon, up_arrow_icon } = icons
  return (
    <>
      <label for="description">Update Status <span className='text--2'>Change feature state</span></label>
      <div className='select' onClick={handleIsOpen}>
        <h4>Planned</h4>
        <figure className='dropdown'>
          <img src={ isOpen ? up_arrow_icon : down_arrow_icon } alt="dropdown" />
        </figure>
        {
          isOpen &&
          <DropdownList />
        }
      </div>

    </>
  )
}
