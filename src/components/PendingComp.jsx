import React from 'react'

const PendingComp = () => {
  return (
    <>
    <div className='roboto'>
        <h1 className='text-center my-5 text-2xl font-bold'>Awaiting Approval</h1>

        <div className='w-full bg-[#95a5a6] rounded py-6 px-7 flex justify-between mb-2  text-sm uppercase tracking-wide'>
                
                <div><h2>JOB ID</h2></div>
                <div><h2>Customer name</h2></div>
                <div><h2>amount due</h2></div>
                <div><h2>approval status</h2></div>
               
            </div>
    
            <div className='flex mb-2 mx-auto justify-between bg-white py-6 px-7 pending-box-shadow'>
                <div><h2>42235</h2></div>
                <div><h2>John Doe</h2></div>
                <div><h2>₦350</h2></div>
                <div><h2>Pending</h2></div>
            </div>
    
            <div className='flex mb-2 mx-auto justify-between bg-white py-6 px-7 pending-box-shadow'>
                <div><h2>42442</h2></div>
                <div><h2>Jennifer Smith</h2></div>
                <div><h2>₦220</h2></div>
                <div><h2>Pending</h2></div>
            </div>
    
            <div className='flex mb-2 mx-auto justify-between bg-white py-6 px-7 pending-box-shadow'>
                <div><h2>42257</h2></div>
                <div><h2>John Smith</h2></div>
                <div><h2>₦341</h2></div>
                <div><h2>Pending</h2></div>
            </div>
    
            <div className='flex mb-2 mx-auto justify-between bg-white py-6 px-7 pending-box-shadow'>
                <div><h2>42311</h2></div>
                <div><h2>John Carpenter</h2></div>
                <div><h2>₦115</h2></div>
                <div><h2>Pending</h2></div>
            </div>
    </div>
    </>
  )
}

export default PendingComp
