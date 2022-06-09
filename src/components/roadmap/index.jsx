import React from 'react'
import { HeaderRoadmap } from './HeaderRoadmap'
import { RoadmapBySections } from './RoadmapBySections'
import { SelectRoadmap } from './SelectRoadmap'

export const RoadMapScreen = () => {
  return (
    <section className='roadmap__screen'>
      <HeaderRoadmap />
      <SelectRoadmap />
      <div className='by__columns'>
        <RoadmapBySections text="Features currently being developed"/>
      </div>
    </section>
  )
}
