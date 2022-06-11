import React from 'react'

export const DropdownListStatus = ({values}) => {
  const { handleIsOpen, status_input, setHandleStatus } = values
  // debugger
  return (
    <>
    <ul className="category__select">
      {
        status_input.map(stat => (
          <li onClick={ () => setHandleStatus(stat) }>{ stat }</li>
        ))
      }
    </ul>
    <div className='layout--dropdown' onClick={ handleIsOpen }></div>
    </>
  )
}
