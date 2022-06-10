import React from 'react'
import { useSelector } from 'react-redux'
import { icons } from '../../constants/assets'
import { useOpen } from '../../hooks/useOpen'
import { DropdownList } from '../forms/DropdownList'
import { DropdownFilter } from '../main/DropdownFilter'
import { AddFeedbackButton } from './AddFeedbackButton'

export const ShortBy = () => {
  const data = useSelector(state => state.filter_reducer)
  // const { productRequests:data } = storageData.length > 0 && storageData[0]
  const { down_arrow_icon, plus_icon, suggestion_icon } = icons
  const { isOpen, handleIsOpen } = useOpen()
  // const data = useSelector(state => state.storage_reducer)
  // debugger
  return (
    <div className='short'>
      <div className='short__by'>
        <figure className='suggested--icon'>
          <img src={ suggestion_icon } alt="suggestion" />
          {
          isOpen && <DropdownFilter values={{ data, handleIsOpen }}/>
        }
        </figure>
        <h2 className=''> <span>{ data.length }</span> Suggestions</h2>
        <h4 className='text--2'>Short by: <strong >Most Upvotes</strong></h4>
        <figure onClick={ handleIsOpen }>
          <img src={ down_arrow_icon } alt="down" />
        </figure>
        
      </div>
      <AddFeedbackButton />
    </div>
  )
}
