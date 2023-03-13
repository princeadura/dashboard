import React from 'react'
import NotificationCard from '../components/NotificationCard'
import { HeroIntro } from '../components'

export const Notification = () => {
  return (
    <>
    <div className='md:flex md:items-end md:w-[80%] md:float-right md:right-0 '>
      <div className='bg-blue w-[90%] md:w-[95%] mx-auto'>
        <div>
          <HeroIntro />
          <NotificationCard />
        </div>
      </div>
    </div>
    
    </>
  )
}
