import React from 'react'
import RetreatsCart from './RetreatsCart'

const Retreats = () => {
  const retreatCartData = [
    {
      id: "1",
      title: "7 Day Mystic Mountain Retreat in Romania",
      price: "$1,000",
      adress: "Gura Humorului, Romania",
      date: "Feb 15 - 21, 2026 ",
      guests: "12",
      description: " Trusted by 190+",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f75d450e622eb69bbb9_1.webp",
      link: "/"
      
    }, {
      id: "2",
      title: "Yoga & Outdoor Retreat in Tuscany, Italy",
      price: "$1,328",
      adress: "Province of Grosseto, Tuscany, Italy",
      date: "Jan 15 - 21, 2026",
      guests: "6",
      description: " Trusted by 125+",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f759c0200e2421e8d01_2.webp",
      link: "/"
    }, , {
      id: "3",
      title: "Photography Retreat & Tour in Magical Morocco",
      price: "$5,575",
      adress: "Morocco",
      date: "March 06 - 20, 2026",
      guests: "18",
      description: " Trusted by 312+",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f75e8fb56ed1c7f7c90_3.webp",
      link: "/"
    }, {
      id: "4",
      title: "Morocco Holiday & Desert Moon",
      price: "$3,829",
      adress: "Marrakesh, Marrakesh-Safi, Morocco",
      date: "April 12 - 20, 2026",
      guests: "6",
      description: " Trusted by 412+ ",
      image: "	https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f75cd93fd313dfcc0bd_4.webp",
      link: "/"
    }, {
      id: "5",
      title: "8 Day Juice Detox, Retreat in Portugal",
      price: "$1,294",
      adress: "Portugal",
      date: "Feb 06 - 14, 2026",
      guests: "12",
      description: " Trusted by 112+",
      image: "	https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b162748ae928115f5f8ee_5.webp",
      link: "/"
    }, {
      id: "6",
      title: " 7Day Solo Travelers Retreat: Fun in Bali",
      price: "$406",
      adress: "Ubud, Bali, Indonesia",
      date: "Jan | Feb | Mar | Apr | May",
      guests: "Solo",
      description: " Trusted by 287+",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b16276a09f35cfb31e223_6.webp",
      link: "/"
    }
  ]

  return (

    <>

      <section className=''>
        <div className="w-full">

          <div className='bg-[#061c20]'>

            <div className='flex flex-col lg:flex-row items-start lg:items-center text-3xl pb-10 px-5 sm:px-8 lg:px-0'>

              <div className='w-full lg:w-1/2'>
                <h2 className='font-bold pt-16 lg:pt-20 text-3xl sm:text-4xl lg:text-5xl text-white'>
                  Featured Retreats
                </h2>
              </div>

              <div className='w-full lg:w-1/2'>

                <p className='pr-0 lg:pr-10 xl:pr-25 pt-8 lg:pt-30 text-base sm:text-lg lg:text-xl text-gray-400 font-sans'>
                  Discover unique locations, engaging activities, and expert
                  led workshops designed to inspire and refresh your spirit.
                </p>

              </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2'>

              {retreatCartData.map((item) => (
                <RetreatsCart key={item.id} cartData={item} />
              ))}

            </div>

          </div>

        </div>
      </section>


      <section className="relative w-full min-h-screen overflow-hidden">

        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b1f5e0aeba6bb251058df_illustration.webp"
          alt="Combine Retreat"
        />

        <div className="relative z-10 text-white pb-5">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold pl-5 sm:pl-8 lg:pl-12 pt-8 lg:pt-10">
            Combine Retreat
          </h1>

          <div className="mt-8 lg:mt-12 text-2xl sm:text-3xl lg:text-4xl font-bold pl-5 sm:pl-8 lg:pl-12">
            <h3>+ Stay</h3>
            <h3>+ Transfers</h3>
            <h3>+ Extras</h3>
          </div>


          <div className='mt-20 lg:mt-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-500'>

            <div className='border-b sm:border-r lg:border-b-0 border-gray-500 pb-1'>
              <h3 className='p-5 sm:p-8 lg:p-3'>
                Combine Retreat into one seamless
                checkout. Instant confirmations where
                available, or concierge support for
                bespoke itineraries.
              </h3>
            </div>


            <div className='border-b sm:border-r lg:border-b-0 p-8 sm:p-10 border-gray-500'>
              <div>
                <h3 className='font-extrabold text-3xl'>01</h3>
                <h3 className='font-light'>step</h3>
              </div>

              <div className='font-bold pt-5'>
                <h3>Choose<br />Retreats</h3>
              </div>
            </div>


            <div className='border-b lg:border-r p-8 sm:p-10 border-gray-500'>
              <div>
                <h3 className='font-extrabold text-3xl'>02</h3>
                <h3 className='font-light'>step</h3>
              </div>

              <div className='font-bold pt-5'>
                <h3>Match Boutique<br />Stay</h3>
              </div>
            </div>


            <div className='border-b sm:border-r lg:border-b-0 p-8 sm:p-10 border-gray-500'>
              <div>
                <h3 className='font-extrabold text-3xl'>03</h3>
                <h3 className='font-light'>step</h3>
              </div>

              <div className='font-bold pt-5'>
                <h3>Add Transfers &<br />Extras</h3>
              </div>
            </div>


            <div className='p-8 sm:p-10 border-gray-500'>
              <div>
                <h3 className='font-extrabold text-3xl'>04</h3>
                <h3 className='font-light'>step</h3>
              </div>

              <div className='font-bold pt-5'>
                <h3>Secure <br />Payment</h3>
              </div>
            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Retreats