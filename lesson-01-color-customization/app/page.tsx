import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className="border-4 border-green-600">
      Hello world!
      </h1>
      <h1 className="text-myCustomColor">
      Hello world!
    </h1>
      <h1 className="text-vuejs-932">
      Hello world!
      </h1>
       <p className='text-red-600 sm:text-green-600 md:text-blue-600 lg:text-yellow-600 xl:text-teal-600'>Hello long sentance</p>
    </div>
  )
}

export default page