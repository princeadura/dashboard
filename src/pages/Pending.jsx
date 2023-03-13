import React from 'react'
import { HeroIntro, PendingComp } from '../components'

export const Pending = () => {
  return (
    <>
    <div className='md:flex md:items-end md:w-[80%] md:float-right md:right-0 '>
      <div className='bg-blue w-[90%] md:w-[95%] mx-auto'>
        <div>
        <HeroIntro />
        <PendingComp />
        </div>
      </div>
    </div>
    
    </>
  )
}
