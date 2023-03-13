import React from 'react'

const SettingsComp = () => {
  return (
    <>
    <div className='roboto my-8'>

        <div className='p-8 m-2 my-3 account-settings-box rounded-lg relative text-white'>
            <h2 className='text-center my-2 text-2xl font-bold'>Accounts</h2>
            <div className='absolute bottom-2 right-2 rounded-md cursor-pointer'>
                <h3>Accounts</h3>
            </div>  
        </div>

        <div className='p-8 m-2 my-3 new-user-box rounded-lg relative text-white'>
            <h2 className='text-center my-2 text-2xl font-bold'>Add New User</h2>
            <div className='absolute bottom-2 right-2 rounded-md cursor-pointer'>
                <h3>Create User</h3>
            </div>  
        </div>

        <div className='p-8 m-2 my-3 new-user-box rounded-lg relative text-white'>
            <h2 className='text-center my-2 text-2xl font-bold'>Add New Admin</h2>
            <div className='absolute bottom-2 right-2 rounded-md cursor-pointer'>
                <h3>Create Admin</h3>
            </div>  
        </div>
            

        <div className='p-8 m-2 my-3 delete-user-box rounded-lg relative text-white'>
            <h2 className='text-center my-2 text-2xl font-bold'>Delete Account</h2>
            <div className='absolute bottom-2 right-2 rounded-md cursor-pointer'>
                <h3>Create Admin</h3>
            </div>  
        </div>


    </div>
    </>
  )
}

export default SettingsComp