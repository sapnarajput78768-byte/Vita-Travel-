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
    <section className="bg-[#061c20] text-white min-h-screen">
      <div className="px-10">
        <div className="pt-30 flex items-center">
          <h3 className="text-gray-300">
            Home
          </h3>

          <h3 className="pl-10 text-xs font-semibold">
            {retreat?.title}
          </h3>
        </div>

        <h1 className="text-3xl pl-5 pt-5 font-bold mb-6">
          {retreat?.title}
        </h1>

        <div className="flex justify-between items-start">
          <img src={retreat?.images[0]} alt="retreat" className="h-[640px] w-[50%] object-cover" />
          <div className="w-[48%]">

            <img src={retreat?.images[1]} alt="retreat" className="w-full h-[310px] object-cover mb-5" />
            <div className="flex gap-5">
              <img src={retreat?.images[2]} alt="retreat" className="w-1/2 h-[310px] object-cover" />
              <img src={retreat?.images[3]} alt="retreat" className="w-1/2 h-[310px] object-cover" />
            </div>

          </div>

        </div>

        <div className="flex items-start mt-10">
          <div className="w-2/3 h-auto pr-10">
            <div className="pt-10 pl-5">
              <h2 className="text-2xl font-bold mb-5">
                About Retreats
              </h2>
              <a href="#" className="text-2xl font-bold mb-5">About Retreats</a>

              <p className="text-gray-400 ">
                {retreat?.about}
              </p>
            </div>
            <div className="pt-24">

              <h2 className="text-2xl font-bold mb-8 pl-5">
                What's Included In This Package
              </h2>
              <div className="flex">
                <div className="w-1/2 pl-5 pr-10 border-t border-gray-700">
                  <h3 className="text-sm font-semibold pt-5 mb-6">
                    {retreat?.included[0]}
                  </h3>
                  <h3 className="text-sm font-semibold mb-6">
                    {retreat?.included[1]}
                  </h3>
                  <h3 className="text-sm font-semibold mb-6">
                    {retreat?.included[2]}
                  </h3>
                  <h3 className="text-sm font-semibold mb-6">
                    {retreat?.included[3]}
                  </h3>
                  <h3 className="text-sm font-semibold mb-6">
                    {retreat?.included[4]}
                  </h3>
                </div>
                <div className="w-1/2 pl-10 border-t border-l border-gray-700">
                  <h3 className="text-sm font-semibold pt-5 mb-6">
                    {retreat?.includedr[0]}
                  </h3>
                  <h3 className="text-sm font-semibold mb-6">
                    {retreat?.includedr[1]}
                  </h3>
                  <h3 className="text-sm font-semibold mb-6">
                    {retreat?.includedr[2]}
                  </h3>
                  <h3 className="text-sm font-semibold mb-6">
                    {retreat?.includedr[3]}
                  </h3>
                  <h3 className="text-sm font-semibold mb-6">
                    {retreat?.includedr[4]}
                  </h3>
                </div>
              </div>
            </div>
            <div className="pt-24 pl-5">
              <h1 className="text-2xl font-bold mb-6">
                What Makes This Retreat Special
              </h1>
              <p className="text-gray-400 leading-7">
                {retreat?.special}
              </p>
            </div>


            <div className="pt-24 pl-5">
              <h1 className="text-2xl font-bold mb-8">
                Full Program
              </h1>
              <div className="flex items-center gap-8 mb-8 text-gray-400">
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

                <div className="h-6 w-px bg-gray-700"></div>
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
              <p className="text-gray-400 leading-7 max-w-[850px] mb-20">
                {retreat?.programText}
              </p>

              <h2 className="text-2xl font-bold mb-8">
                Sample Daily Schedule
              </h2>

              <div className="grid grid-cols-3 border-t border-gray-700">

                <div className="h-[215px] p-5 border-r border-b border-gray-700 flex flex-col justify-between">
                  <h3 className="text-xl font-bold">
                    {retreat?.schedule[0].time}
                  </h3>

                  <p className="text-gray-500 font-semibold leading-6">
                    {retreat?.schedule[0].text}
                  </p>
                </div>

                <div className="h-[215px] p-5 border-r border-b border-gray-700 flex flex-col justify-between">
                  <h3 className="text-xl font-bold">
                    {retreat?.schedule[1].time}
                  </h3>

                  <p className="text-gray-500 font-semibold leading-6">
                    {retreat?.schedule[1].text}
                  </p>
                </div>

                <div className="h-[215px] p-5 border-b border-gray-700 flex flex-col justify-between">
                  <h3 className="text-xl font-bold">
                    {retreat?.schedule[2].time}
                  </h3>

                  <p className="text-gray-500 font-semibold leading-6">
                    {retreat?.schedule[2].text}
                  </p>
                </div>

                <div className="h-[215px] p-5 border-r border-b border-gray-700 flex flex-col justify-between">
                  <h3 className="text-xl font-bold">
                    {retreat?.schedule[3].time}
                  </h3>

                  <p className="text-gray-500 font-semibold leading-6">
                    {retreat?.schedule[3].text}
                  </p>
                </div>

                <div className="h-[215px] p-5 border-r border-b border-gray-700 flex flex-col justify-between">
                  <h3 className="text-xl font-bold">
                    {retreat?.schedule[4].time}
                  </h3>

                  <p className="text-gray-500 font-semibold leading-6">
                    {retreat?.schedule[4].text}
                  </p>
                </div>

                <div className="h-[215px] p-5 border-b border-gray-700 flex flex-col justify-between">
                  <h3 className="text-xl font-bold">
                    {retreat?.schedule[5].time}
                  </h3>

                  <p className="text-gray-500 font-semibold leading-6">
                    {retreat?.schedule[5].text}
                  </p>
                </div>

              </div>

            </div>
            <div className="pt-24 pl-5">
              <h1 className="text-2xl font-bold mb-8">
                Food
              </h1>

              <p className="text-gray-400 text-lg leading-7 max-w-[900px] mb-8">
                {retreat?.foodDescription}
              </p>
              <div className="grid grid-cols-2 border-t border-gray-700">
                <div className="pt-10 pr-10 pb-8">
                  <h2 className="text-xl font-bold mb-8">
                    Meals Provided
                  </h2>

                  <div className="space-y-6">

                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                        ✓
                      </span>
                      <span className="text-lg font-semibold">
                        {retreat?.meals[0]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                        ✓
                      </span>
                      <span className="text-lg font-semibold">
                        {retreat?.meals[1]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                        ✓
                      </span>
                      <span className="text-lg font-semibold">
                        {retreat?.meals[2]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                        ✓
                      </span>
                      <span className="text-lg font-semibold">
                        {retreat?.meals[3]}
                      </span>
                    </div>

                  </div>
                </div>
                <div className="pt-10 pl-10 pb-8 border-l border-gray-700">
                  <h2 className="text-xl font-bold mb-8">
                    {retreat?.diets[0]}
                  </h2>

                  <div className="space-y-6">

                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                        ✓
                      </span>
                      <span className="text-lg font-semibold">
                        {retreat?.diets[1]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                        ✓
                      </span>
                      <span className="text-lg font-semibold">
                        {retreat?.diets[2]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
                        ✓
                      </span>
                      <span className="text-lg font-semibold">
                        {retreat?.diets[3]}
                      </span>
                    </div>

                    {/* <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
            ✓
          </span>
          <span className="text-lg font-semibold">
             {retreat?.diets[4]}
          </span>
        </div> */}
        

                  </div>
                </div>

              </div>

              <div className="grid grid-cols-4 gap-7 mt-20">

                <img src={retreat?.foodImages[0]} alt="Food" className="w-full h-[290px] object-cover" />
                <img src={retreat?.foodImages[1]} alt="Food" className="w-full h-[290px] object-cover" />
                <img src={retreat?.foodImages[2]} alt="Food" className="w-full h-[290px] object-cover" />
                <img src={retreat?.foodImages[3]} alt="Food" className="w-full h-[290px] object-cover" />

              </div>

            </div>

            <div className="pt-24 pl-5">
              <h1 className="text-2xl font-bold mb-8">
                Team
              </h1>
              <div className="border-t border-gray-700 grid grid-cols-2">

                <div className="min-h-[615px] pr-12 pt-10 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-2">
                      {retreat?.team.name}
                    </h2>

                    <p className="text-lg font-semibold">
                      {retreat?.team.role}
                    </p>
                  </div>

                  <div className="max-w-[520px] pb-10">

                    <p className="text-gray-400 text-lg leading-6 mb-7">
                      {retreat?.team.description1}
                    </p>

                    <p className="text-gray-400 text-lg leading-6">
                      {retreat?.team.description2}
                    </p>

                  </div>
                </div>

                <div className="border-l border-gray-700 pl-9 pt-9 pr-5 pb-9 flex justify-center">
                  <img src={retreat?.team.image} alt="Julien Lefèvre" className="w-full h-[540px] object-cover" />

                </div>

              </div>

            </div>


            <div className="pt-24 pl-5">
              <h1 className="text-3xl font-bold mb-8">
                Where we’ll meet
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-gray-500 text-xl">
                  ◉
                </span>

                <p className="text-lg font-semibold">
                  {retreat?.locationData.address}
                </p>
              </div>
              <div className="max-w-[850px]">
                <p className="text-gray-400 text-lg leading-6 mb-8">
                  {retreat?.locationData.description1}
                </p>

                <p className="text-gray-400 text-lg leading-6">
                  {retreat?.locationData.description2}
                </p>

              </div>

              <div className="mt-8 pr-5">

                <img src={retreat?.locationData.image} alt=" location" className="w-full h-[500px] object-cover" />

              </div>

            </div>



            <div className="pt-24 pl-5">
              <h1 className="text-2xl md:text-3xl font-bold mb-8">
                What's{" "}
                <span className="text-orange-500">
                  Not Included
                </span>{" "}
                In This Package
              </h1>
              <div className="grid grid-cols-2 border-t border-gray-700">
                <div className="py-10 pr-10">

                  <div className="flex items-center gap-3 mb-7">
                    <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                      ×
                    </span>

                    <span className="text-lg font-semibold">
                      {retreat?.notIncluded[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-7">
                    <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                      ×
                    </span>

                    <span className="text-lg font-semibold">
                      {retreat?.notIncluded[1]}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                      ×
                    </span>

                    <span className="text-lg font-semibold">
                      {retreat?.notIncluded[2]}
                    </span>
                  </div>

                </div>

                <div className="py-10 pl-10 border-l border-gray-700">

                  <div className="flex items-center gap-3 mb-7">
                    <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                      ×
                    </span>

                    <span className="text-lg font-semibold">
                      {retreat?.notIncluded[3]}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-7">
                    <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                      ×
                    </span>

                    <span className="text-lg font-semibold">
                      {retreat?.notIncluded[4]}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                      ×
                    </span>

                    <span className="text-lg font-semibold">
                      {retreat?.notIncluded[5]}
                    </span>
                  </div>

                </div>

              </div>

            </div>



            <div className="mt-32 -mx-15">
              <div className="px-10 pb-16 flex justify-between items-start">
                <h1 className="text-5xl md:text-6xl font-bold ">
                  You may also like
                </h1>
                <div className="flex items-center gap-12">
                  <p className="text-gray-400 text-lg leading-6 max-w-[480px]">
                    Discover unique locations, engaging activities, and expert-
                    <br />
                    led workshops designed to inspire and refresh your spirit.
                  </p>

                  <button onClick={() => navigate("/retreats")}
                  className="bg-[#0d3a44] hover:bg-[#124954] transition rounded-4xl px-7 py-4 flex items-center gap-8 font-semibold">
                    See all

                    <span className="text-lg">
                      ✦
                    </span>
                  </button>

                </div>

              </div>
            </div>
          </div >

          <div className=" sticky top-5 w-1/3  p-10  pb-20">
            <div className=" border-l border-gray-700 pl-8">
              <h4 className="text-3xl font-bold">
                <span className="text-gray-500 text-1xl font-normal">
                  from
                </span>
                {" "}
                $1,000
              </h4>
              <p className="pt-3 ">
                Gura Humorului, Romania
              </p>
              <p className="pt-2 text-lg">
                Feb 15 - 21, 2026
                <span className="text-gray-500 text-base">
                  {" "}
                  (7 days, 6 nights)
                </span>
              </p>
              <p className="pt-2 pb-2 ">
                12 guests
              </p>


              <div className="border-t border-gray-700 pt-5">

                <a
                  href="#about"
                  className="block text-lg text-gray-400 hover:text-white mb-6"
                >
                  About Retreats
                </a>

                <a href="#full-program" className="block text-lg text-gray-400 hover:text-white mb-6">
                  Full Program
                </a>

                <a href="#food" className="block text-lg text-gray-400 hover:text-white mb-6" >
                  Food
                </a>

                <a href="#team" className="block text-lg text-gray-400 hover:text-white mb-6" >
                  Team
                </a>

                <a href="#location" className="block text-lg text-gray-400 hover:text-white mb-6">
                  Location
                </a>




                <button className="w-full bg-white text-black py-3 rounded-full">
                  Get in touch
                </button>

              </div>


            </div>
          </div>

        </div>
      </div>
      {/* <div className="grid grid-cols-2 border-t border-gray-700 ">
        <div className="border-r border-gray-700 p-12">
          <div className="flex gap-10 ">
            <div className="flex flex-col justify-between ">
              <div>
                <h2 className="text-3xl font-bold leading-tight">
                  Photography Retreat & Tour in
                  <br />
                  Magical Morocco
                </h2>

                <p className="mt-5 text-gray-400 text-lg">
                  from{" "}
                  <span className="text-white font-bold">
                    $1,328
                  </span>
                </p>
              </div>

              <div className="mt-20">

                <p className="font-semibold">
                  Province of Grosseto, Tuscany, Italy
                </p>

                <p className="mt-4 font-semibold">
                  Jan 15 - 21, 2026{" "}
                  <span className="text-gray-500 text-xs">
                    (7 days, 6 nights)
                  </span>
                </p>

                <p className="mt-4 font-semibold">
                  6 guests
                </p>

                <p className="mt-4 text-gray-400 font-semibold">
                  Trusted by{" "}
                  <span className="text-white">
                    125+
                  </span>{" "}
                  clients worldwide
                </p>
                <div className="text-orange-500 mt-2">
                  ★★★★★
                </div>
                <button onClick={() => navigate("/retreatsin")} className="mt-7 w-full bg-[#0d3a44] hover:bg-[#124954] transition rounded-full py-4 px-6 flex justify-between items-center font-semibold">
                  Explore Retreat
                  <span>
                    ✦
                  </span>
                </button>

              </div>

            </div>


            <div className="">
              <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f759c0200e2421e8d01_2.webp" alt="image" className="w-full h-[375px] object-cover" />
            </div>
          </div>
        </div>

        <div className="p-12">
          <div className="flex gap-10">
            <div className="w-1/2 flex flex-col justify-between">

              <div>
                <h2 className="text-3xl font-bold ">
                  Photography Retreat & Tour in
                  <br />
                  Magical Morocco
                </h2>

                <p className="mt-5 text-gray-400 text-lg">
                  from{" "}
                  <span className="text-white font-bold">
                    $5,575
                  </span>
                </p>
              </div>

              <div className="mt-20">

                <p className="font-semibold">
                  Morocco
                </p>

                <p className="mt-4 font-semibold">
                  March 06 - 20, 2026{" "}
                  <span className="text-gray-500 text-xs">
                    (15 days, 14 nights)
                  </span>
                </p>

                <p className="mt-4 font-semibold">
                  18 guests
                </p>

                <p className="mt-4 text-gray-400 font-semibold">
                  Trusted by{" "}
                  <span className="text-white">
                    312+
                  </span>{" "}
                  clients worldwide
                </p>
                <div className="text-orange-500 mt-2">
                  ★★★★★
                </div>
                <button className="mt-7 w-full bg-[#0d3a44] hover:bg-[#124954] transition rounded-full py-4 px-6 flex justify-between items-center font-semibold">
                  Explore Retreat

                  <span>
                    ✦
                  </span>
                </button>
              </div>
            </div>

            <div className="w-60">
              <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f75e8fb56ed1c7f7c90_3.webp" alt=" image" className="w-full h-[375px] object-cover" />
            </div>
          </div>
        </div>
      </div> */}
      <img className="opacity-100 w-full h-auto" src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b6310adee6f369b84c520_illustration.webp" alt="image" />
      <footer className="border-t border-gray-700">
        <div className="grid grid-cols-3 min-h-[258px]">
          <div className="p-9">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <button onClick={() => window.location.href = "http://localhost:5173"}><span className="text-xl">✱  </span>Vita Travels</button>
            </h2>

          </div>
          <div className="p-9">
            <div className="text-4xl font-bold leading-[1.25]">
              <button className='hover:text-amber-300' onClick={() => window.location.href = "http://localhost:5173/coaches"}><span className="text-gray-500"> + </span> Coaches </button>
              <button className='hover:text-amber-300' onClick={() => window.location.href = "http://localhost:5173/contact"}><span className="text-gray-500"> +</span> Contacts </button>
            </div>
          </div>

          <div className="p-9">
            <p className="text-lg font-semibold">+1 012 345 678</p>
            <p className="text-lg font-semibold mt-3"> vita-travels@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="grid grid-cols-4 min-h-[78px]">
            <div className="p-7 border-r border-gray-700">
              <p className="text-sm font-semibold text-gray-400">
                ©All Rights Reserved. Vita Travel, 2026</p>
            </div>

            <div className="p-7">

              <p className="text-sm font-semibold text-gray-400">  Made by ✱ Phenomenon Studio</p>

            </div>

            <div className="p-7 flex justify-end">
              <p className="text-sm font-semibold text-gray-400"> Terms and Conditions</p>
            </div>

            <div className="p-7">
              <p className="text-sm font-semibold text-gray-400"></p>
            </div>

          </div>

        </div>

      </footer>
    </section>

  );
}

export default Retreatsin;