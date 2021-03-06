import React from 'react'
import { icons } from '../../constants/assets'
import { useOpen } from '../../hooks/useOpen'
import { DropdownList } from './DropdownList'
import { DropdownListStatus } from './DropdownListStatus'
export const EditUpdateStatus = ({ values }) => {
  const { status_input, handleStatus, setHandleStatus } = values
  const { isOpen, handleIsOpen } = useOpen()
  const { down_arrow_icon, up_arrow_icon } = icons
  return (
    <>
      <label for="description">Update Status <span className='text--2'>Change feature state</span></label>
      <div className='select' onClick={handleIsOpen}>
        <h4>{ handleStatus }</h4>
        <figure className='dropdown'>
          <img src={ isOpen ? up_arrow_icon : down_arrow_icon } alt="dropdown" />
        </figure>
        {
          isOpen &&
          <DropdownListStatus values={{ handleIsOpen, status_input, setHandleStatus }}/>
        }
      </div>

    </>
  )
}
