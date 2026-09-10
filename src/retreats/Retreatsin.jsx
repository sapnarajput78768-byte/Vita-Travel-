import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import RetreatsInData from "./RetreatsInData";

function Retreatsin() {
  const navigate = useNavigate();
  const { id } = useParams();

  const filteredData = RetreatsInData.filter(
    (item) => item.id === Number(id)
  );

  const retreat = filteredData[0];

  console.log("URL ID:", id);
  console.log("Filtered Data:", filteredData);
  console.log("Retreat:", retreat);

  return (
    <section className="bg-[#061c20] text-white min-h-screen w-full overflow-hidden">

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">

        <div className="pt-28 sm:pt-30 flex flex-wrap items-center gap-3 sm:gap-5">
          <h3 className="text-gray-300 text-sm sm:text-base">
            Home
          </h3>

          <span className="text-gray-500">/</span>

          <h3 className="text-xs sm:text-sm font-semibold break-words">
            {retreat?.title}
          </h3>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl pl-0 sm:pl-3 pt-5 font-bold mb-6">
          {retreat?.title}
        </h1>


        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 sm:gap-5">

          <div className="w-full lg:w-[50%]">
            <img
              src={retreat?.images[0]}
              alt="retreat"
              className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[640px] object-cover"
            />
          </div>

          <div className="w-full lg:w-[48%]">

            <img
              src={retreat?.images[1]}
              alt="retreat"
              className="w-full h-[220px] sm:h-[280px] md:h-[310px] object-cover mb-4 sm:mb-5"
            />

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <img
                src={retreat?.images[2]}
                alt="retreat"
                className="w-full sm:w-1/2 h-[220px] sm:h-[280px] md:h-[310px] object-cover"
              />

              <img
                src={retreat?.images[3]}
                alt="retreat"
                className="w-full sm:w-1/2 h-[220px] sm:h-[280px] md:h-[310px] object-cover"
              />
            </div>

          </div>
        </div>


        <div className="flex flex-col lg:flex-row items-start mt-10 lg:mt-16">

          <div className="w-full lg:w-2/3 lg:pr-10">

            {/* ABOUT */}
            <div
              id="about"
              className="pt-10 pl-0 sm:pl-3"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                About Retreats
              </h2>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                {retreat?.about}
              </p>
            </div>


            <div className="pt-16 sm:pt-20 lg:pt-24">

              <h2 className="text-2xl sm:text-3xl font-bold mb-8 pl-0 sm:pl-3">
                What's Included In This Package
              </h2>

              <div className="flex flex-col md:flex-row">

                <div className="w-full md:w-1/2 pl-0 sm:pl-3 pr-0 sm:pr-10 border-t border-gray-700">

                  {retreat?.included?.map((item, index) => (
                    <h3
                      key={index}
                      className="text-sm sm:text-base font-semibold pt-5 mb-6"
                    >
                      {item}
                    </h3>
                  ))}

                </div>

                <div className="w-full md:w-1/2 pl-0 md:pl-10 border-t md:border-l border-gray-700">

                  {retreat?.includedr?.map((item, index) => (
                    <h3
                      key={index}
                      className="text-sm sm:text-base font-semibold pt-5 mb-6"
                    >
                      {item}
                    </h3>
                  ))}

                </div>

              </div>
            </div>


            <div className="pt-16 sm:pt-20 lg:pt-24 pl-0 sm:pl-3">

              <h1 className="text-2xl sm:text-3xl font-bold mb-6">
                What Makes This Retreat Special
              </h1>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                {retreat?.special}
              </p>

            </div>


            <div
              id="full-program"
              className="pt-16 sm:pt-20 lg:pt-24 pl-0 sm:pl-3"
            >

              <h1 className="text-2xl sm:text-3xl font-bold mb-8">
                Full Program
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 mb-8 text-gray-400">

                <div className="flex items-center gap-3">
                  <span className="text-xl text-[#527176]">
                    ↪
                  </span>

                  <span className="font-semibold">
                    Check-in:
                  </span>

                  <span className="text-white font-bold">
                    6:00 PM
                  </span>
                </div>

                <div className="hidden sm:block h-6 w-px bg-gray-700"></div>

                <div className="flex items-center gap-3">
                  <span className="text-xl text-[#527176]">
                    ↪
                  </span>

                  <span className="font-semibold">
                    Check-out:
                  </span>

                  <span className="text-white font-bold">
                    4:00 PM
                  </span>
                </div>

              </div>

              <p className="text-gray-400 leading-7 max-w-[850px] mb-16 sm:mb-20 text-sm sm:text-base">
                {retreat?.programText}
              </p>


              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Sample Daily Schedule
              </h2>


              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-700">

                {retreat?.schedule?.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      min-h-[180px] sm:min-h-[215px]
                      p-5
                      border-b border-gray-700
                      ${index % 2 === 0 ? "sm:border-r" : ""}
                      ${index % 3 !== 2 ? "lg:border-r" : ""}
                    `}
                  >

                    <div className="h-full flex flex-col justify-between">

                      <h3 className="text-xl font-bold">
                        {item.time}
                      </h3>

                      <p className="text-gray-500 font-semibold leading-6 text-sm sm:text-base">
                        {item.text}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>


            <div
              id="food"
              className="pt-16 sm:pt-20 lg:pt-24 pl-0 sm:pl-3"
            >

              <h1 className="text-2xl sm:text-3xl font-bold mb-8">
                Food
              </h1>

              <p className="text-gray-400 text-base sm:text-lg leading-7 max-w-[900px] mb-8">
                {retreat?.foodDescription}
              </p>


              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700">

                <div className="pt-8 sm:pt-10 pr-0 md:pr-10 pb-8">

                  <h2 className="text-xl sm:text-2xl font-bold mb-8">
                    Meals Provided
                  </h2>

                  <div className="space-y-6">

                    {retreat?.meals?.map((meal, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <span className="shrink-0 w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                          ✓
                        </span>

                        <span className="text-base sm:text-lg font-semibold">
                          {meal}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>


                <div className="pt-8 sm:pt-10 pl-0 md:pl-10 pb-8 border-t md:border-t-0 md:border-l border-gray-700">

                  <h2 className="text-xl sm:text-2xl font-bold mb-8">
                    {retreat?.diets?.[0]}
                  </h2>

                  <div className="space-y-6">

                    {retreat?.diets?.slice(1).map((diet, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <span className="shrink-0 w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                          ✓
                        </span>

                        <span className="text-base sm:text-lg font-semibold">
                          {diet}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>

              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-7 mt-12 sm:mt-20">

                {retreat?.foodImages?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Food"
                    className="w-full h-[250px] sm:h-[290px] object-cover"
                  />
                ))}

              </div>

            </div>


            <div
              id="team"
              className="pt-16 sm:pt-20 lg:pt-24 pl-0 sm:pl-3"
            >

              <h1 className="text-2xl sm:text-3xl font-bold mb-8">
                Team
              </h1>

              <div className="border-t border-gray-700 grid grid-cols-1 md:grid-cols-2">

             
                <div className="min-h-0 md:min-h-[615px] pr-0 md:pr-12 pt-8 sm:pt-10 flex flex-col justify-between">

                  <div>

                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      {retreat?.team?.name}
                    </h2>

                    <p className="text-base sm:text-lg font-semibold">
                      {retreat?.team?.role}
                    </p>

                  </div>


                  <div className="max-w-[520px] py-8 md:pb-10">

                    <p className="text-gray-400 text-base sm:text-lg leading-6 mb-7">
                      {retreat?.team?.description1}
                    </p>

                    {retreat?.team?.description2 && (
                      <p className="text-gray-400 text-base sm:text-lg leading-6">
                        {retreat?.team?.description2}
                      </p>
                    )}

                  </div>

                </div>


                <div className="border-t md:border-t-0 md:border-l border-gray-700 pl-0 md:pl-9 pt-8 md:pt-9 pr-0 md:pr-5 pb-8 md:pb-9 flex justify-center">

                  <img
                    src={retreat?.team?.image}
                    alt={retreat?.team?.name}
                    className="w-full h-[400px] sm:h-[500px] md:h-[540px] object-cover"
                  />

                </div>

              </div>

            </div>


       
            <div
              id="location"
              className="pt-16 sm:pt-20 lg:pt-24 pl-0 sm:pl-3"
            >

              <h1 className="text-2xl sm:text-3xl font-bold mb-8">
                Where we’ll meet
              </h1>


              <div className="flex items-start gap-3 mb-8">

                <span className="text-gray-500 text-xl shrink-0">
                  ◉
                </span>

                <p className="text-base sm:text-lg font-semibold whitespace-pre-line">
                  {retreat?.locationData?.address}
                </p>

              </div>


              <div className="max-w-[850px]">

                <p className="text-gray-400 text-base sm:text-lg leading-6 mb-8">
                  {retreat?.locationData?.description1}
                </p>

                {retreat?.locationData?.description2 && (
                  <p className="text-gray-400 text-base sm:text-lg leading-6">
                    {retreat?.locationData?.description2}
                  </p>
                )}

              </div>


              <div className="mt-8 pr-0 sm:pr-5">

                <img
                  src={retreat?.locationData?.image}
                  alt="location"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />

              </div>

            </div>


            <div className="pt-16 sm:pt-20 lg:pt-24 pl-0 sm:pl-3">

              <h1 className="text-2xl sm:text-3xl font-bold mb-8">

                What's{" "}

                <span className="text-orange-500">
                  Not Included
                </span>{" "}

                In This Package

              </h1>


              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700">

                
                <div className="py-8 sm:py-10 pr-0 md:pr-10">

                  {retreat?.notIncluded?.slice(0, 3).map((item, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3 mb-7"
                    >

                      <span className="shrink-0 w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                        ×
                      </span>

                      <span className="text-base sm:text-lg font-semibold">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

                <div className="py-8 sm:py-10 pl-0 md:pl-10 border-t md:border-t-0 md:border-l border-gray-700">

                  {retreat?.notIncluded?.slice(3, 6).map((item, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3 mb-7"
                    >

                      <span className="shrink-0 w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                        ×
                      </span>

                      <span className="text-base sm:text-lg font-semibold">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            <div className="mt-20 sm:mt-28 lg:mt-32">

              <div className="px-0 sm:px-5 pb-12 sm:pb-16 flex flex-col lg:flex-row justify-between items-start gap-8">

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  You may also like
                </h1>


                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 lg:gap-12">

                  <p className="text-gray-400 text-base sm:text-lg leading-6 max-w-[480px]">
                    Discover unique locations, engaging activities, and expert-led
                    workshops designed to inspire and refresh your spirit.
                  </p>


                  <button
                    onClick={() => navigate("/retreats")}
                    className="bg-[#0d3a44] hover:bg-[#124954] transition rounded-4xl px-7 py-4 flex items-center gap-8 font-semibold whitespace-nowrap"
                  >
                    See all

                    <span className="text-lg">
                      ✦
                    </span>

                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT BOOKING SIDEBAR ================= */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-5 p-0 lg:p-10 pb-16 lg:pb-20 mt-10 lg:mt-0">

            <div className="border-t lg:border-t-0 lg:border-l border-gray-700 pl-0 lg:pl-8 pt-8 lg:pt-0">

              <h4 className="text-2xl sm:text-3xl font-bold">

                <span className="text-gray-500 text-base font-normal">
                  from
                </span>

                {" "}

                {retreat?.price}

              </h4>


              <p className="pt-3 text-sm sm:text-base">
                {retreat?.location}
              </p>


              <p className="pt-2 text-base sm:text-lg">

                {retreat?.date}

                <span className="text-gray-500 text-sm sm:text-base">
                  {" "}
                  ({retreat?.duration})
                </span>

              </p>


              <p className="pt-2 pb-2">
                {retreat?.guests}
              </p>


              <div className="border-t border-gray-700 pt-5 mt-5">

                <a
                  href="#about"
                  className="block text-base sm:text-lg text-gray-400 hover:text-white mb-6"
                >
                  About Retreats
                </a>


                <a
                  href="#full-program"
                  className="block text-base sm:text-lg text-gray-400 hover:text-white mb-6"
                >
                  Full Program
                </a>


                <a
                  href="#food"
                  className="block text-base sm:text-lg text-gray-400 hover:text-white mb-6"
                >
                  Food
                </a>


                <a
                  href="#team"
                  className="block text-base sm:text-lg text-gray-400 hover:text-white mb-6"
                >
                  Team
                </a>


                <a
                  href="#location"
                  className="block text-base sm:text-lg text-gray-400 hover:text-white mb-6"
                >
                  Location
                </a>


                <button className="w-full bg-white hover:bg-gray-200 transition text-black py-3 rounded-full mt-2">
                  Get in touch
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM IMAGE ================= */}
      <img
        className="opacity-100 w-full h-auto block mt-10"
        src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b6310adee6f369b84c520_illustration.webp"
        alt="image"
      />


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-700">

        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[258px]">

          <div className="p-6 sm:p-9">

            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">

              <button
                onClick={() =>
                  window.location.href = "http://localhost:5173"
                }
              >
                <span className="text-xl">
                  ✱
                </span>

                Vita Travels
              </button>

            </h2>

          </div>


          <div className="p-6 sm:p-9">

            <div className="text-3xl sm:text-4xl font-bold leading-[1.25]">

              <button
                className="block hover:text-amber-300"
                onClick={() =>
                  window.location.href = "http://localhost:5173/coaches"
                }
              >
                <span className="text-gray-500">
                  +
                </span>

                {" "}Coaches
              </button>


              <button
                className="block hover:text-amber-300 mt-2"
                onClick={() =>
                  window.location.href = "http://localhost:5173/contact"
                }
              >
                <span className="text-gray-500">
                  +
                </span>

                {" "}Contacts
              </button>

            </div>

          </div>


          <div className="p-6 sm:p-9">

            <p className="text-base sm:text-lg font-semibold">
              +1 012 345 678
            </p>

            <p className="text-base sm:text-lg font-semibold mt-3 break-words">
              vita-travels@gmail.com
            </p>

          </div>

        </div>


        {/* Footer Bottom */}
        <div className="border-t border-gray-700">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-[78px]">

            <div className="p-5 sm:p-7 border-b sm:border-b-0 sm:border-r border-gray-700">

              <p className="text-xs sm:text-sm font-semibold text-gray-400">
                ©All Rights Reserved. Vita Travel, 2026
              </p>

            </div>


            <div className="p-5 sm:p-7">

              <p className="text-xs sm:text-sm font-semibold text-gray-400">
                Made by ✱ Phenomenon Studio
              </p>

            </div>


            <div className="p-5 sm:p-7 lg:flex lg:justify-end">

              <p className="text-xs sm:text-sm font-semibold text-gray-400">
                Terms and Conditions
              </p>

            </div>


            <div className="p-5 sm:p-7"></div>

          </div>

        </div>

      </footer>

    </section>
  );
}

export default Retreatsin;