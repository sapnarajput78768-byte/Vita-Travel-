import React from 'react'

const ExploreCart = ({ cartData }) => {
  console.log(cartData)

  return (
    <div className='flex  flex-col lg:flex-row border border-gray-700 justify-between p-5 sm:p-7 lg:p-10 pr-5 sm:pr-7 lg:pr-16 gap-8 lg:gap-10'>

      <div className='text-white flex flex-col justify-between flex-1'>

        <div>

          <h1 className='font-bold text-base sm:text-lg leading-snug'>
            {cartData.title}
          </h1>

          <p className='text-gray-500 font-semibold mt-4'>
            from
          </p>

          <h3 className='text-2xl'>
            {cartData.price}
          </h3>

        </div>


        <div className='text-white mt-8 lg:mt-0'>

          <h3 className='text-lg sm:text-xl font-semibold'>
            {cartData.address}
          </h3>

          <div className='flex flex-wrap items-center gap-2 sm:gap-4 mt-2'>

            <h3 className='font-semibold'>
              {cartData.date}
            </h3>

            <p className='font-semibold text-gray-400 text-xs'>
              (7 days, 6 nights)
            </p>

          </div>

          <h3 className='font-semibold mt-2'>
            {cartData.guest}guests
          </h3>

          <div className='flex flex-wrap gap-2 pb-6 mt-2'>

            <h3 className='font-semibold'>
              {cartData.discription}
            </h3>

            <p className='text-xs font-semibold text-gray-400'>
              clients worldwide
            </p>

          </div>


          <button
            onClick={() => navigate("/retreats")}
            className="h-10 min-h-10 px-5 sm:px-6 rounded-2xl bg-gray-600 hover:bg-amber-300 text-sm sm:text-base font-semibold text-black hover:scale-105 transition flex items-center justify-center"
          >
            Explore Retreats <h4 className='ml-1'>✦</h4>
          </button>

        </div>

      </div>


      <div className='w-full lg:w-[300px] shrink-0'>

        <img
          src={cartData.image}
          className="w-full h-64 sm:h-80 lg:h-[300px] object-cover"
        />

      </div>

    </div>
  )
}

export default ExploreCart