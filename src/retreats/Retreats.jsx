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

      <section>
        <div className="container ">

          <div className='bg-[#061c20]'>
            <div className=' flex items-center text-3xl pb-10' >
              <div className='w-1/2 '>
                <h2 className=' font-bold pt-20 text-5xl text-white  '> Featured Retreats</h2>
              </div>

              <div className='w-1/2'>
                <p className='pr-25  pt-30 text-xl  text-gray-400 font-sans flex justify-self-end'>
                  Discover unique locations, engaging activities, and expert-<br />
                  led workshops designed to inspire and refresh your spirit.</p>
              </div>
            </div>
            <div className='grid grid-cols-2 '>

              {retreatCartData.map((item) => (
                <RetreatsCart key={item.id} cartData={item} />
              ))}


            </div>

          </div>

        </div>
      </section>

      <section className="relative w-full min-h-screen overflow-hidden">

        <img className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b1f5e0aeba6bb251058df_illustration.webp"
          alt="Combine Retreat" />

        <div className="relative z-10 text-white pb-5">

          <h1 className="text-6xl font-bold pl-12 pt-10">
            Combine Retreat
          </h1>
          
            <div className="mt-12 text-4xl font-bold pl-12">
              <h3>+ Stay</h3>
              <h3>+ Transfers</h3>
              <h3>+ Extras</h3>
            </div>
            <div className=' mt-50 grid grid-cols-5   border-1 border-gray-500  '>
              <div className='border-r-1 pb-1 border-gray-500 '>
                <h3 className='p-3'>Combine Retreat into one seamless
                  checkout. Instant confirmations where
                  available, or concierge support for
                  bespoke itineraries.</h3>
              </div>
              
              <div className='border-r-1 p-10 border-gray-500  '>
                <div className=''>
                  <h3 className='font-extrabold text-3xl'>01</h3><h3 className='font-light'>step</h3>
                </div>
                <div className='font-bold pt-5'>
                <h3>Choose<br />Retreats</h3>
                </div>

              </div>
              <div className='border-r-1 p-10 border-gray-500  '>
                <div className=''>
                  <h3 className='font-extrabold text-3xl'>02</h3><h3 className='font-light'>step</h3>
                </div>
                <div className='font-bold pt-5'>
                <h3>Match Boutique<br />Stay</h3>
                </div>

              </div>
              <div className='border-r-1 p-10 border-gray-500  '>
                <div className=''>
                  <h3 className='font-extrabold text-3xl'>03</h3><h3 className='font-light'>step</h3>
                </div>
                <div className='font-bold pt-5'>
                <h3>Add Transfers &<br />Extras</h3>
                </div>

              </div>
              <div className=' p-10 border-gray-500  '>
                <div className=''>
                  <h3 className='font-extrabold text-3xl'>04</h3><h3 className='font-light'>step</h3>
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