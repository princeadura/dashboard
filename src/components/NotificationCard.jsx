import React from 'react'
import { ImBin } from 'react-icons/im'
import { SiFiles } from 'react-icons/si'
import img_one from '/dashboard-img1.jpg'
import img_two from '/dashboard-img2.jpg'
import img_three from '/dashboard-img3.jpg'
import img_four from '/dashboard-img4.jpg'
import img_five from '/dashboard-img5.jpg'


const NotificationCard = () => {
  return (
    <>

    <h1 className='text-3xl text-center pt-7 tracking-wider font-light text-[#353232] uppercase pb-4'>NOTIFICATION</h1>

    <div className='w-full flex items-center justify-between mb-5 p-5 py-7 hover:mx-auto hover:w-[92%] hover:opacity-80 hover:py-6 hover:p-4 bg-white rounded-md notification-card-box transition-all  ease-in duration-[0.3s] cursor-pointer relative'>
        <div className='w-16 h-16 rounded-full border'>
            <img src={img_one} alt="" className='w-full object-cover bg-cover h-16 rounded-full'/>
        </div>

        <div className='ml-6 hover:ml-0 hover:mr-2'>
            <h3 className='roboto tracking-wide font-bold text-lg text-center'>Verdieu Steeve</h3>
            <p className='text-[#929292] roboto text-sm max-w-[180px]'>Just Started following you</p>
        </div>

        <div>

        </div>

        <div className='flex flex-col gap-1 absolute w-full h-full right-[1px] justify-center items-end opacity-0 hover:opacity-100'>
            <div className='bg-green-500 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><SiFiles className='text-white'/></div>
            <div className='bg-red-700 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><ImBin className='text-white'/></div>
        </div>
    </div>


    <div className='w-full flex items-center justify-between mb-5 p-5 hover:mx-auto hover:w-[92%] hover:opacity-80 hover:py-6 hover:p-4 bg-white rounded-md notification-card-box transition-all ease-in duration-[0.3s] cursor-pointer relative'>
        <div className='w-16 h-16 rounded-full border'>
            <img src={img_two} alt="" className='w-full object-cover bg-cover h-16 rounded-full'/>
        </div>

        <div className='ml-6 hover:ml-0 hover:mr-2'>
            <h3 className='roboto tracking-wide font-bold text-lg text-center'>Mike Miles</h3>
            <p className='text-[#929292] roboto text-sm max-w-[180px]'>Just liked your video story</p>
        </div>

        <div>

        </div>

        <div className='flex flex-col gap-1 absolute w-full h-full right-[1px] justify-center items-end opacity-0 hover:opacity-100'>
            <div className='bg-green-500 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><SiFiles className='text-white'/></div>
            <div className='bg-red-700 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><ImBin className='text-white'/></div>
        </div>
    </div>

    <div className='w-full flex items-center justify-between mb-5 p-5 py-7 hover:mx-auto hover:w-[92%] hover:opacity-80 hover:py-6 hover:p-4 bg-white rounded-md notification-card-box transition-all ease-in duration-[0.3s] cursor-pointer relative'>
        <div className='w-16 h-16 rounded-full border'>
            <img src={img_three} alt="" className='w-full object-cover bg-cover h-16 rounded-full'/>
        </div>

        <div className='ml-6 hover:ml-0 hover:mr-2'>
            <h3 className='roboto tracking-wide font-bold text-lg text-center'>Helen Saga</h3>
            <p className='text-[#929292] roboto text-sm max-w-[180px]'>Added you to a todos list for tommorow</p>
        </div>

        <div>

        </div>

        <div className='flex flex-col gap-1 absolute w-full h-full right-[1px] justify-center items-end opacity-0 hover:opacity-100'>
            <div className='bg-green-500 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><SiFiles className='text-white'/></div>
            <div className='bg-red-700 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><ImBin className='text-white'/></div>
        </div>
    </div>

    <div className='w-full flex items-center justify-between mb-5 p-5 py-7 hover:mx-auto hover:w-[92%] hover:opacity-80 hover:py-6 hover:p-4 bg-white rounded-md notification-card-box transition-all ease-in duration-[0.3s] cursor-pointer relative'>
        <div className='w-16 h-16 rounded-full border'>
            <img src={img_four} alt="" className='w-full object-cover bg-cover h-16 rounded-full'/>
        </div>

        <div className='ml-6 hover:ml-0 hover:mr-2'>
            <h3 className='roboto tracking-wide font-bold text-lg text-center'>Sarah Sharp</h3>
            <p className='text-[#929292] roboto text-sm max-w-[180px]'>Just commented on your last post</p>
        </div>

        <div>

        </div>

        <div className='flex flex-col gap-1 absolute w-full h-full right-[1px] justify-center items-end opacity-0 hover:opacity-100'>
            <div className='bg-green-500 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><SiFiles className='text-white'/></div>
            <div className='bg-red-700 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><ImBin className='text-white'/></div>
        </div>
    </div>

    <div className='w-full flex items-center justify-between mb-5 p-5 py-7 hover:mx-auto hover:w-[92%] hover:opacity-80 hover:py-6 hover:p-4 bg-white rounded-md notification-card-box transition-all ease-in duration-[0.3s] cursor-pointer relative'>
        <div className='w-16 h-16 rounded-full border'>
            <img src={img_five} alt="" className='w-full object-cover bg-cover h-16 rounded-full'/>
        </div>

        <div className='ml-6 hover:ml-0 hover:mr-2'>
            <h3 className='roboto tracking-wide font-bold text-lg text-center'>John Lee</h3>
            <p className='text-[#929292] roboto text-sm max-w-[180px]'>Just Started following you</p>
        </div>

        <div>

        </div>

        <div className='flex flex-col gap-1 absolute w-full h-full right-[1px] justify-center items-end opacity-0 hover:opacity-100'>
            <div className='bg-green-500 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><SiFiles className='text-white'/></div>
            <div className='bg-red-700 opacity-80 p-2 w-8 text-center rounded-full flex items-center justify-center'><ImBin className='text-white'/></div>
        </div>
    </div>
    </>
    

    
  )
}

export default NotificationCard
