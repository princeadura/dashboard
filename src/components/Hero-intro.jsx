import React from 'react'

const HeroIntro = () => {
  return (
    <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-6'>
        
      <div className='bg-white rounded-md p-5 hero-box'>
        <h3 className='text-sm users-color font-bold'>Total users</h3>
        <h2 className='text-black text-3xl font-bold roboto py-2'>143,000</h2>
      </div>

      <div className='bg-white rounded-md p-5 hero-box'>
        <h3 className='text-sm successful-color font-bold roboto'>Successful orders</h3>
        <h2 className='text-black text-3xl font-bold roboto py-2'>13,400</h2>
      </div>

      <div className='bg-white rounded-md p-5 hero-box'>
        <h3 className='text-sm pending-color font-bold roboto'>Pending issues</h3>
        <h2 className='text-black text-3xl font-bold roboto py-2'>429</h2>
      </div>
        
    </div>  
  )
}

export default HeroIntro