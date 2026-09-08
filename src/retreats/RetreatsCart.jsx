import React from 'react'
import { useNavigate } from 'react-router-dom'

const RetreatsCart = ({ cartData }) => {
  const navigate = useNavigate()


  console.log(cartData)
  return (
    <div className=' flex border border-gray-700 justify-between p-10 pr-16 '>
      <div className='text-white  flex flex-col justify-between'>
        <div>
        <h1 className='font-bold  '>{cartData.title}</h1>
        <p className='text-gray-500 font-semibold'>from</p>
        <h3 className='text-2xl '>{cartData.price}</h3>
     </div>

        <div className='text-1xl text-white'>
          <h3 className='text-xl font-semibold'>{cartData.address}</h3>
          <div className='flex items-center space-x-4 '>
            <h3 className='font-semibold'>{cartData.date}</h3>
            <p className='font-semibold text-gray-400 text-xs'>(7 days, 6 nights)</p>
          </div>
          <h3 className='font-semibold'>{cartData.guest}guests</h3>
          <div className='flex space-x-3 pb-6'>
            < h3 className='font-semibold'>{cartData.discription} </h3><p className='text-xs font-semibold text-gray-400'>clients worldwide</p>

          </div>
          
          <button  onClick={() => navigate(`/retreatsin/${cartData.id}`)}className="  h-7 px-4.5 py-3.5 rounded-2xl bg-gray-600 hover:bg-amber-300   text-1xl font-semibold text-black hover:scale-105 transition flex items-center justify-center">
                Explore Retreats <h4 className=''>✦</h4></button>
            
        </div>
      </div>


      <div className='w-[300px]'>
        <img src={cartData.image} />
      </div>
    </div>
  )
}

export default RetreatsCart