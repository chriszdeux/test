import React, { useState } from 'react'
import { RoadMap } from './RoadMap'
import { SuggesstionsList } from './SuggesstionsList'

export const Suggestions = () => {

  return (
    <div className="suggestions">
      <SuggesstionsList />
      <RoadMap />
    </div>
  )
}
