import { delay } from 'framer-motion'
import { motion } from 'framer-motion'
import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Dashboard_header = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
   <>
   <div className='w-full bg-[#202d40] flex justify-between items-center px-6 md:px-16 py-[30px]'>
        <div>
            <h1 className='text-3xl font-bold logo-color cursor-pointer uppercase tracking-wider roboto'>MANDILAS</h1>
        </div>
        <div className='hidden md:flex items-center gap-16 text-white font-bold roboto text-base'>
          <div>
          <a href="/"><div>Welcome:Trillionx</div></a>
          <div className='bg-[#b18373] w-[15%] h-[3px] rounded-lg'></div>
          </div>

          <div>
          <a href="/pending"><div>Approval</div></a>
          <div className='bg-[#b18373] w-[25%] h-[3px] rounded-lg'></div>
          </div>

          <div>
          <a href="/notification"><div>Notification</div></a>
          <div className='bg-[#b18373] w-[25%] h-[3px] rounded-lg'></div>
          </div>

          <div>
          <a href="/settings"><div>Logout</div></a>
          <div className='bg-[#b18373] w-[25%] h-[3px] rounded-lg'></div>
          </div>
        </div>
        <div className='hidden md:flex'>
        <button className='px-3 py-1 rounded-lg bg-[#b18373] text-white'>ADMIN</button>
        </div>
        <div className='text-white md:hidden cursor-pointer' onClick={handleNav}>
            <AiOutlineMenu size={30} />
        </div>

        
   </div>

  <motion.div
  initial={{y:0}}
  whileInView={{y:0}}
  transition={{duration:1, delay:1.0,}}
  // onClick={handleNav}
  className={nav? 'fixed bg-[#202d40] w-[100%] h-screen z-[20] top-0 md:hidden' : 'hidden'}>
    <div className='w-[95%] mx-auto flex flex-col gap-2 items-center justify-center pt-20 text-lg text-white uppercase'>

      <div onClick={handleNav} className='absolute top-6 right-6 cursor-pointer'>
        <AiOutlineClose size={25} />
      </div>

        <a href="/"><div className=''>Welcome:Trillion</div></a>
        <div className='w-2/6 h-[1px] bg-white rounded-full'></div>
        <a href="/pending"><div className='hover:text-[#b18373]'>Approval</div></a>
        <a href="/notification"><div className='hover:text-[#b18373]'>Notification</div></a>
        <a href="/"><div className='hover:text-[#b18373]'>Dashboard</div></a>
        <a href="/pending"><div className='hover:text-[#b18373]'>Pending Issues</div></a>
        <a href="transactionHistory"><div className='hover:text-[#b18373]'>Transaction History</div></a>
        <a href="/settings"><div className='hover:text-[#b18373]'>Settings</div></a>
        <a href="/settings"><div className='hover:text-[#b18373]'>Log out</div></a>
        <a href="/settings"><button className='bg-[#b18373] px-3 py-1 rounded-lg cursor-pointer'>ADMIN</button></a>
    </div>
  </motion.div>
   </>
  )
}

export default Dashboard_header