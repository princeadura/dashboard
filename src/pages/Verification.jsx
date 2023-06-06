import React from 'react'
import { HeroIntro, Notification_box } from '../components'

export const Home = () => {
  return (
    <>
    <div className='md:flex md:items-end md:w-[80%] md:float-right md:right-0 '>
      <div className='bg-blue w-[90%] mx-auto'>
        <div>
        <HeroIntro />
        <Notification_box />
        </div>
      </div>
    </div>
    
    </>
    
  )
}