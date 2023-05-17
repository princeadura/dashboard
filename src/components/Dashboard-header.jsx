import { delay } from 'framer-motion'
import { motion } from 'framer-motion'
import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Dashboard_header = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
   <>
   <div className='w-full bg-[#202d40] flex justify-between items-center px-6 md:px-16 py-[30px]'>
        <div>
            <h1 className='text-3xl font-bold logo-color cursor-pointer uppercase tracking-wider roboto'>STRAPY</h1>
        </div>

        <div className='hidden md:flex items-center gap-16 text-white font-bold roboto text-base relative'>
          <div className='relative'>
            <Link to="/"><div>Welcome:Ridwan</div></Link>
            <div className='absolute w-[15%] hover:w-full h-6 top-0 flex items-end cursor-pointer'>
              <div className='bg-[#b18373] w-full h-[3px] rounded-lg hover:w-full cursor-pointer transition-all ease-in'></div>
            </div>
          </div>

          <div className='relative'>
          <Link to="/pending"><div>Approval</div></Link>
            <div className='absolute w-[25%] hover:w-full h-6 top-0 flex items-end cursor-pointer'>
              <div className='bg-[#b18373] w-full h-[3px] rounded-lg hover:w-full cursor-pointer transition-all ease-in'></div>
            </div>
          </div>

          <div className='relative'>
          <Link to="/notification"><div>Notification</div></Link>
            <div className='absolute w-[25%] hover:w-full h-6 top-0 flex items-end cursor-pointer'>
              <div className='bg-[#b18373] w-full h-[3px] rounded-lg hover:w-full cursor-pointer transition-all ease-in'></div>
            </div>
          </div>

          <div className='relative'>
          <Link to="/settings"><div>Logout</div></Link>
            <div className='absolute w-[25%] hover:w-full h-6 top-0 flex items-end cursor-pointer'>
              <div className='bg-[#b18373] w-full h-[3px] rounded-lg hover:w-full cursor-pointer transition-all ease-in'></div>
            </div>
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
    <div className='w-[95%] mx-auto flex flex-col gap-6 items-center justify-center pt-20 text-lg text-white uppercase'>

      <div onClick={handleNav} className='absolute top-6 right-6 cursor-pointer'>
        <AiOutlineClose size={25} />
      </div>

        <Link onClick={handleNav} to="/"><div className=''>Welcome:Trillion</div></Link>
        <div className='w-2/6 h-[1px] bg-white rounded-full'></div>
        <Link onClick={handleNav} to="/pending"><div className='hover:text-[#b18373]'>Approval</div></Link>
        <Link onClick={handleNav} to="/notification"><div className='hover:text-[#b18373]'>Notification</div></Link>
        <Link onClick={handleNav} to="/"><div className='hover:text-[#b18373]'>Dashboard</div></Link>
        <Link onClick={handleNav} to="/pending"><div className='hover:text-[#b18373]'>Pending Issues</div></Link>
        <Link onClick={handleNav} to="transactionHistory"><div className='hover:text-[#b18373]'>Transaction History</div></Link>
        <Link onClick={handleNav} to="/settings"><div className='hover:text-[#b18373]'>Settings</div></Link>
        <Link onClick={handleNav} to="/settings"><div className='hover:text-[#b18373]'>Log out</div></Link>
        <Link onClick={handleNav} to="/settings"><button className='bg-[#b18373] px-3 py-1 rounded-lg cursor-pointer'>ADMIN</button></Link>
    </div>
  </motion.div>
   </>
  )
}

export default Dashboard_header