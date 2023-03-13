import React from 'react'
import SettingsComp from '../components/SettingsComp'

export const Settings = () => {
  return (
    <>
    <div className='md:flex md:items-end md:w-[80%] md:float-right md:right-0 '>
      <div className='bg-blue w-[95%] md:w-[98%] mx-auto'>
        <div>
           <SettingsComp />
        </div>
      </div>
    </div>
    
    </>
  )
}
