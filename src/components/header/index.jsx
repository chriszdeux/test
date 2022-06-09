import React from 'react'
import { background_images } from '../../constants/assets'

import { MobileHeader } from './MobileHeader'
import { TabletHeader } from './TabletHeader'

export const Header = () => {
  return (
    <header className='header' >
      <MobileHeader />
      <TabletHeader />
    </header>
  )
}
