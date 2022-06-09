import React from 'react'

export const SelectRoadmap = () => {
  return (
    <ul className='select__roadmap'>
      <li>{ `planned (2)`}</li>
      <li className='active'>{ `In-Progess (3)`}</li>
      <li>{ `Live (1)`}</li>
    </ul>
  )
}
