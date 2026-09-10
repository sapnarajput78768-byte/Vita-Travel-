import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative">
        <div>
          <img
            className="bg bg1 w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69b131f7e83fd36f79be5b78_bg-part-1.webp"
            alt='background'
          />

          <img
            className="bg bg1 w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69b131f75b251dd705fc8bb9_bg-part-2.webp"
            alt='background'
          />

          <div className="relative z-10 flex h-full flex-col justify-center px-5 sm:px-10 md:px-20 pt-2.5 pb-2.5">

            <div className='justify-center grid pt-40 sm:pt-60 md:pt-80 lg:pt-109 pb-40 sm:pb-60 md:pb-80 lg:pb-100 text-center'>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-bold leading-none justify-center text-white">
                Travel
              </h1>

              <p className="mt-4 text-lg sm:text-2xl md:text-3xl font-semibold leading-tight justify-center text-white">
                With purpose. Book retreats, active<br className="hidden sm:block" />
                tours, and boutique stays in one place.
              </p>

              <button
                onClick={() => navigate("/retreats")}
                className="mt-10 mx-auto gap-1 rounded-full w-full max-w-xs hover:bg-amber-300 bg-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold text-black hover:scale-105 transition flex items-center justify-center"
              >
                Explore Retreats <span>✦</span>
              </button>

            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="bg-[#061c20]">

          <div className='text-white pt-12 sm:pt-16 md:pt-20 px-5 sm:px-10 md:px-20 flex flex-col lg:flex-row gap-8 lg:gap-20'>

            <button
              onClick={() => navigate("/retreats")}
            >
              <h2 className="text-lg sm:text-xl">
                ✱ <span>Retreats</span>
              </h2>
            </button>

            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold pl-0 lg:pl-20'>
              We've vetted retreats in<br className="hidden sm:block" />
              more than 100 countries<br className="hidden sm:block" />
              See for yourself
            </h1>

          </div>

          <div className='flex flex-col md:flex-row pt-12 sm:pt-16 md:pt-20 px-5 sm:px-10 md:px-0'>

            <div className='border p-5 border-gray-400 text-white w-full md:w-1/3'>
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Introvert Retreats</h2>
                <p className='text-gray-400 text-sm'>/ 78+ Countries</p>
              </div>

              <img
                src='homecard.webp'
                alt='image'
                className='h-auto min-h-[280px] sm:min-h-[350px] md:h-100 w-full object-cover mt-4'
              />
            </div>


            <div className='border p-5 border-gray-400 text-white w-full md:w-1/3'>
              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Yoga Retreats</h2>
                <p className='text-gray-400 text-sm'>/ 89+ Countries</p>
              </div>

              <img
                src='homecard1.webp'
                alt='image'
                className='pl-0 md:pl-5 h-auto min-h-[280px] sm:min-h-[350px] md:h-100 w-full object-cover mt-4'
              />
            </div>


            <div className='border p-5 border-gray-400 text-white w-full md:w-1/3'>

              <div className='flex justify-between gap-3'>
                <h2 className='font-bold'>Detox</h2>
                <p className='text-gray-400 text-sm'>/ 56+ Countries</p>
              </div>

              <img
                src='homecard2.webp'
                alt='image'
                className='pl-0 md:pl-5 h-auto min-h-[280px] sm:min-h-[350px] md:h-100 w-full object-cover mt-4'
              />

            </div>

          </div>

        </div>
      </section>


      <section>
        <div className="w-full bg-[#061c20]">

          <div className="flex items-center pt-24 sm:pt-32 md:pt-50">

            <div className='text-white flex flex-col lg:flex-row gap-6 lg:gap-20 px-5 md:px-10 lg:px-0'>

              <button>
                <h2 className="text-lg sm:text-xl">
                  ✱ <span>About Us</span>
                </h2>
              </button>

              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold pl-0 lg:pl-20'>
                Not just trips experiences that<br className="hidden sm:block" />
                nurture body and soul
                <br />
                See for yourself
              </h1>

            </div>

          </div>


          <div className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-0">

            <img
              src='https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6979a5eeee86150be7247f79_illustration-about.jpg'
              alt='image'
              className='pl-0 md:pl-5 pt-10 md:pt-20 h-auto lg:h-120 w-full lg:w-1/2 object-cover relative'
            />

            <div className='text-white pt-10 lg:pt-30 pl-0 lg:pl-20 text-base sm:text-lg'>

              <p>
                Vita Travel is a premium wellness travel marketplace<br className="hidden sm:block" />
                that blends the ease of booking with the feel of an editorial<br className="hidden sm:block" />
                magazine. Discover curated programs, match them with<br className="hidden sm:block" />
                exceptional stays, and book seamlessly.
              </p>


              <div className="flex pt-10 flex-col sm:flex-row gap-8 sm:gap-16">

                <div className="text-white pr-0 sm:pr-10">
                  <h2 className='font-extrabold text-2xl'>100+</h2>

                  <p>
                    Total countries<br />
                    travelled
                  </p>
                </div>

                <div className="text-white">
                  <h2 className='font-extrabold text-2xl'>1 472+</h2>

                  <p>
                    Total retreats<br />
                    attended
                  </p>
                </div>

              </div>


              <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pt-16 sm:pt-20 pb-20 sm:pb-30'>

                <p className='text-gray-400 pr-0 sm:pr-10 text-center sm:text-left'>
                  Trusted by travelers looking for more than ordinary<br className="hidden sm:block" />
                  vacations.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-5">
                  <img src='yogahome.svg' alt='image' />
                  <img src='logo2home.svg' alt='image' />
                  <img src='logo3home.svg' alt='image' />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}


export default Home