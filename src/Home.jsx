import React from 'react'

const Home = () => {
  return (
    <>
      <section className="relative ">
        <div>
          <img className="bg bg1" src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69b131f7e83fd36f79be5b78_bg-part-1.webp" alt='background' />
          <img className="bg bg1" src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69b131f75b251dd705fc8bb9_bg-part-2.webp" alt='background' />
          <div className="relative z-10 flex h-full flex-col justify-center px-20 pt-2.5 pb-2.5">
            <div className=' justify-center grid pt-109 !pb-100 text-center '>
              <h1 className="text-[140px] font-bold leading-none justify-center text-white">Travel</h1>
              <p className="mt-4 text-3xl font-semibold leading-tight justify-center text-white"  >With purpose. Book retreats, active<br />
                tours, and boutique stays  in one place.</p>
              <button onClick={() => window.location.href = "http://localhost:5173/retreats"} className="mt-10 ml-30 gap-1 rounded-full w-3xs  hover:bg-amber-300 bg-white px-8 py-5 text-lg font-semibold text-black hover:scale-105 transition flex items-center justify-center">
                Explore Retreats <span>✦</span>



              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#061c20]">
          <div className='text-white pt-20 flex'>
            <buton onClick={() => window.location.href = "http://localhost:5173/retreats"}><h2>✱ <span>Retreats</span></h2></buton>
            <h1 className='text-3xl font-bold pl-40'>
              We've vetted retreats in<br />
              more than 100 countries<br />
              See for yourself</h1>
          </div>
          <div className='flex pt-20'>
            <div className='border p-5 border-gray-400  text-white'>
              <div className='flex justify-between'>
                <h2 className='font-bold'>Introvert Retreats</h2>
                <p className='text-gray-400'>/ 78+ Countries</p>
              </div>
              <img src='homecard.webp' alt='image' className='  h-100 w-120' />
            </div>
            <div className='border p-5 border-gray-400  text-white'>
              <div className='flex justify-between'>
                <h2 className='font-bold'>Yoga Retreats</h2>
                <p className='text-gray-400'>/ 89+ Countries</p>
              </div>
              <img src='homecard1.webp' alt='image' className='pl-5   h-100 w-120' />
            </div>
            <div className='border p-5 border-gray-400  text-white'>

              <div className='flex justify-between'>
                <h2 className='font-bold'>Detox</h2>
                <p className='text-gray-400'>/ 56+ Countries</p>
              </div>
              <img src='homecard2.webp' alt='image' className='pl-5  h-100 w-120' />
            </div>
          </div>

        </div>
      </section>


      <section>
        <div className="container bg-[#061c20]">
          <div className="flex items-center pt-50">
            <div className=' absolute text-white flex'>
              <buton ><h2>✱ <span>About Us</span></h2></buton>
              <h1 className='text-4xl font-bold pl-50'>
                Not just trips experiences that<br />
                nurture body and soul
                See for yourself</h1>
            </div>
          </div>
          <div className="flex">
            <img src='https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6979a5eeee86150be7247f79_illustration-about.jpg' alt='image' className='pl-5 pt-20  h-120 w-100 relative pt-30' />

            <p className='text-white pt-30 pl-30  text-1xl '>
              Vita Travel is a premium wellness travel marketplace<br />
              that blends the ease of booking with the feel of an editorial<br />
              magazine. Discover curated programs, match them with<br />
              exceptional stays, and book seamlessly.<div className="flex pt-10  ">
            <div className="text-white pr-10">
              <h2 className='font-extrabold text-2xl'>100+</h2>
              <p>Total countries<br />
                travelled</p>
            </div>
            <div className="text-white ">
              <h2 className='font-extrabold text-2xl'>1 472+</h2>
              <p>Total retreats<br />
                attended</p>
            </div>

          </div>
          <div className='flex justify-center items-center pt-20 pb-30'>
            <p className='text-gray-400  pr-10'>Trusted by travelers looking for more than ordinary<br />
              vacations.</p>
            <img src='yogahome.svg' alt='image' />
            <img src='logo2home.svg' alt='image' />
            <img src='logo3home.svg' alt='image' />

          </div></p>
          </div>
          

        </div>
      </section>
    </>
  )
}


export default Home   