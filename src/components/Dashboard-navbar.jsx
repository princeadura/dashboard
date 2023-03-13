import React from 'react'

const Dashboard_navbar = () => {
  return (
    <>
    <div className='hidden md:flex absolute flex-col gap-6 bg-[#202d40] w-1/5 h-[86.4%] text-white items-center z-10 text-base cursor-pointer roboto font-bold overflow-hidden'>
        <a href="/"><div className='pt-4'>Dashboard</div></a>
        <hr className='w-full'></hr>
        <a href="/pending"><div>Pending Issues</div></a>
        <hr className='w-full'></hr>
        <a href="/notification"><div>Notifications</div></a>
        <hr className='w-full'></hr>
        <a href="/transactionHistory"><div>Transaction History</div></a>
        <hr className='w-full'></hr>
        <a href="/settings"><div>Settings</div></a>
        <hr className='w-full'></hr>
        <a href="/settings"><div>Log out</div></a>
        <hr className='w-full pb-4'></hr>
    </div>
    </>
    
  )
}

export default Dashboard_navbar