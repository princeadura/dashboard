import React from 'react'
import NotificationCard from './NotificationCard'
import TransactionCard from './TransactionCard'

const Notification_box = () => {
  return (
    <section className='pt-9 pb-2 bg-blue'>
      <div className='mx-auto notification-color rounded-md flex flex-col md:flex-row gap-4 md:gap-10'>

        <div className='flex flex-col w-[90%] mx-auto md:mx-6'>
          <NotificationCard />
        </div>

        <div className='flex flex-col w-[90%] mx-auto md:mr-6'>
          <TransactionCard />
        </div>

      </div>
    </section>
  )
}

export default Notification_box