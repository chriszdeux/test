import React, { useState } from 'react'

export const SuggesstionsList = () => {
  const [suggestions, setSuggestions] = useState([
    'All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'
  ])
  return (
    <ul className="suggestions__list">
      {
        suggestions.map(item => (
          <li key={ item } className="text--2"><h4>{ item }</h4></li>
        ))
      }
    </ul>
  )
}
