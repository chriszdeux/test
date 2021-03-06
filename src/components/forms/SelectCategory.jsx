import React from 'react'
import { icons } from '../../constants/assets'
import { useOpen } from '../../hooks/useOpen'
import { DropdownList } from './DropdownList'

export const SelectCategory = ({ values }) => {
  const { setHandleCategory, categories, handleCategory } = values
  const { isOpen, handleIsOpen } = useOpen()
  const { down_arrow_icon, up_arrow_icon } = icons

  return (
    <>
      <label for="description">Category <span className='text--2'>Chose a category for your feedback</span></label>
      <div className='select' onClick={handleIsOpen}>
        <h4>{ handleCategory }</h4>
        <figure className='dropdown'>
          <img src={ isOpen ? up_arrow_icon : down_arrow_icon } alt="dropdown" />
        </figure>
        {
          isOpen &&
          <DropdownList values={{ handleIsOpen,categories, setHandleCategory }}/>
        }
      </div>

    </>
  )
}
