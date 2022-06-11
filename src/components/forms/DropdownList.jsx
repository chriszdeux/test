import React from 'react'

export const DropdownList = ({values}) => {
  const { handleIsOpen, categories, setHandleCategory } = values
  return (
    <>
    <ul className="category__select">
      {
        categories.map(cat => (
          <li onClick={ () => setHandleCategory(cat) }>{ cat }</li>
        ))
      }
    </ul>
    <div className='layout--dropdown' onClick={ handleIsOpen }></div>
    </>
  )
}
