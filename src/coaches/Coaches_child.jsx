import React from 'react'

const Coaches_child = ({ coachesData }) => {

  console.log(coachesData)

  return (
    <>
      <div className="relative w-full">

        <div
          className="group relative h-[420px] sm:h-[460px] md:h-[480px] lg:h-[500px] border-t border-r border-b border-gray-700 overflow-hidden"
        >

          <img
            className="absolute inset-0 w-full h-full object-cover p-5 sm:p-7 md:p-8 lg:p-10 transition-opacity duration-500 group-hover:opacity-0"
            src={coachesData.image}
            alt={coachesData.title}
          />


          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
          </div>


          <div
            className="absolute inset-0 bg-[#061c20]/25"
          ></div>


          <div
            className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 transition-opacity duration-300 group-hover:opacity-0"
          >

            <h3 className="text-white text-xl sm:text-2xl font-semibold">
              {coachesData.title}
            </h3>

            <p className="font-light text-xs text-white">
              {coachesData.title_1}
            </p>

          </div>


          <div
            className="absolute inset-0 z-20 flex flex-col justify-end p-5 sm:p-7 md:p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[#061c20]/80"
          >

            <h3 className="text-white text-xl sm:text-2xl font-semibold">
              {coachesData.title}
            </h3>

            <p className="text-white text-sm">
              {coachesData.title_1}
            </p>

            <p className="mt-3 sm:mt-4 text-xs whitespace-pre-line text-gray-400 leading-5 sm:leading-6">
              {coachesData.discription}
            </p>


            <div className="mt-5 sm:mt-6 pt-4">

              <div className='flex justify-between gap-4 font-semibold'>

                <p className="text-xs">
                  Countries travelled
                </p>

                <p className="text-white">
                  {coachesData.country}
                </p>

              </div>


              <div className='flex justify-between gap-4 font-semibold mt-3'>

                <p className="text-xs">
                  Retreats attended
                </p>

                <p className="text-white">
                  {coachesData.attended}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Coaches_child