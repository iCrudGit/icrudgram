import React from 'react'

const Loader = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
        <div className='h-28 w-28 border-gray-300 border-8 rounded-full border-t-green-800 animate-spin'>

        </div>
    </div>
  )
}

export default Loader