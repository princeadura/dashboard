import React from 'react'
import TransactionCard from '../components/TransactionCard'
import { HeroIntro } from '../components'

export const Transaction = () => {
  return (
    <>
    <div className='md:flex md:items-end md:w-[80%] md:float-right md:right-0 '>
      <div className='bg-blue w-[90%] md:w-[95%] mx-auto'>
        <div>
          <HeroIntro />
          <TransactionCard />
        </div>
      </div>
    </div>
    </>
  )
}
