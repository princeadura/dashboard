import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard_navbar = () => {
  return (
    <>
    <div className='hidden md:flex absolute flex-col gap-6 bg-[#202d40] w-1/5 h-[86.4%] text-white items-center z-10 text-base cursor-pointer roboto font-bold overflow-hidden'>
        <Link to="/"><div className='pt-4'>Dashboard</div></Link>
        <hr className='w-full'></hr>
        <Link to="/pending"><div>Pending Issues</div></Link>
        <hr className='w-full'></hr>
        <Link to="/notification"><div>Notifications</div></Link>
        <hr className='w-full'></hr>
        <Link to="/users"><div>Users-details</div></Link>
        <hr className='w-full'></hr>
        <Link to="/transactionHistory"><div>Transaction History</div></Link>
        <hr className='w-full'></hr>
        <Link to="/settings"><div>Settings</div></Link>
        <hr className='w-full'></hr>
        <Link to="/settings"><div>Log out</div></Link>
        <hr className='w-full pb-4'></hr>
    </div>
    </>
    
  )
}

export default Dashboard_navbar