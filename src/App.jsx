import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { Dashboard_header, Dashboard_navbar, HeroIntro, Notification_box, Dashboard_footer, PendingComp } from './components'
import { Home } from './pages/Home'
import { Pending } from './pages/Pending'
import { Notification } from './pages/Notification'
import { Transaction } from './pages/Transaction'
import { Settings } from './pages/Settings'


function App() {

  return (
    <>
    <div  className='bg-blue relative'>
      <Dashboard_header />
      <div className='flex'>
      <Dashboard_navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pending' element={<Pending/>} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/transactionHistory' element={<Transaction />} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
      <Dashboard_footer />
    </div>
     
    </>
   
    
  )
}

export default App
