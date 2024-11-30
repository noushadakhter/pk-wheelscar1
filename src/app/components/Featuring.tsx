import React from 'react'

const Featuring = () => {
  return (
    <div>
       
        <div className='flex'>
    <ul className='flex justify-between w-full'>
        <li className='ml-52 text-2xl text-gray-900 font-semibold'>Featured New Cars</li>
        <li className='mr-60 text-blue-600'>View All New Cars</li>
    </ul>
</div>
<br />

         <div className='flex'>
    <ul className='flex w-full ml-52 space-x-20 '>
        <li className='cursor-pointer text-gray-800  font-medium  border-b-2 border-transparent hover:border-blue-500 pb-1 '>Popular</li>
        <li className='cursor-pointer text-gray-800  font-medium  border-b-2 border-transparent hover:border-blue-500 pb-1 '>Upcoming</li>
        <li className='cursor-pointer text-gray-800  font-medium  border-b-2 border-transparent hover:border-blue-500 pb-1 '>Newly Launched</li>
    </ul>
</div> <br />
<hr className='border-t border-gray-700 ml-52 mr-60' />

    </div>
  )
}

export default Featuring