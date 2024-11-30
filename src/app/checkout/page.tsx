import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <form action="details" className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
          <h1 className='text-center text-3xl font-semibold text-gray-800 mb-6'>Enter Your Details</h1>
          
          <div className='space-y-5'>
            <input 
              type="text" 
              placeholder='Enter Your Name' 
              className='w-full border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-100'
            />
            
            <input 
              type="email" 
              placeholder='Enter Your Email' 
              className='w-full border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-100'
            />
            
            <input 
              type="text" 
              placeholder='Enter Your Card Number' 
              className='w-full border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-100'
            />
            
            <input 
              type="text" 
              placeholder='Enter Your Address' 
              className='w-full border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-100'
            />
          </div>

          <Link href="/thankyou"><button 
            type="submit" 
            className='w-full mt-6 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200'
          >
            Place Your Order
          </button></Link>
        </form>
      </div>
    </div>
  )
}

export default page