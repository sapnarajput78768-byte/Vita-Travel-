import React from "react";

const Contacts = () => {
  return (
    <>
      <section className="bg-[#061c20] text-white min-h-screen">

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          <div className="mt-15">

            <img
              className="border-r border-gray-400 border-r-gray-700 h-full w-full p-5 object-cover"
              src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989df5258a6f0a8174626f3_illustration-contact.webp"
            />

          </div>


          <div className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 lg:py-32">

            <div className="flex items-center gap-2 mb-7">

              <span className="text-2xl text-gray-500">
                ✱
              </span>

              <h3 className="font-semibold text-lg">
                Contacts
              </h3>

            </div>


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Get in touch
            </h1>


            <p className="mt-5 sm:mt-7 text-lg sm:text-xl font-semibold text-gray-400">
              Contact the Vita Travel team today!
            </p>


            <form className="mt-10 sm:mt-14">
              <form
  onSubmit={(e) => {
    e.preventDefault();
    alert("Successfully submitted");
  }}
  className="mt-10 sm:mt-14"
></form>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div>

                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-gray-700 pb-4 text-lg sm:text-xl font-semibold text-white placeholder-gray-500 outline-none focus:border-gray-400"
                  />

                </div>


                <div>

                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-gray-700 pb-4 text-lg sm:text-xl font-semibold text-white placeholder-gray-500 outline-none focus:border-gray-400"
                  />

                </div>

              </div>


              <div className="mt-10 sm:mt-14">

                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-gray-700 pb-4 text-lg sm:text-xl font-semibold text-white placeholder-gray-500 outline-none resize-none focus:border-gray-400"
                ></textarea>

              </div>


              <div className="border-t border-gray-700 mt-16 sm:mt-28 pt-8 sm:pt-10">

                <button
                  type="submit"
                  onClick={() => alert("Succesfully submited")}
                  className="bg-white ml-0 sm:ml-10 hover:bg-amber-300 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-5 transition"
                >
                  

                  <span>
                    Submit
                  </span>

                  <span>
                    ✦
                  </span>

                </button>

              </div>

            </form>

          </div>

        </div>


        <footer className="border-t border-gray-700">

          <div className="grid grid-cols-1 md:grid-cols-3 min-h-[258px]">

            <div className="p-6 sm:p-9">

              <h2 className="text-2xl font-bold flex items-center gap-2">

                <button
                 onClick={() => navigate("/home")}
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
                  className="flex hover:text-amber-300"
                  onClick={() => navigate("/coaches")}
                >
                  <span className="text-gray-500 hover:text-amber-50">
                    +
                  </span>
                  Coaches
                </button>


                <button
                  className="flex hover:text-amber-300"
                  onClick={() => navigate("/contact")}
                >
                  <span className="text-gray-500 hover:text-amber-50">
                    +
                  </span>
                  Contact
                </button>

              </div>

            </div>


            <div className="p-6 sm:p-9">

              <p className="text-lg font-semibold">
                +1 012 345 678
              </p>

              <p className="text-lg font-semibold mt-3">
                vita-travels@gmail.com
              </p>

            </div>

          </div>


          <div className="border-t border-gray-700">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-[78px]">

              <div className="p-5 sm:p-7 border-r border-gray-700">

                <p className="text-sm font-semibold text-gray-400">
                  ©All Rights Reserved. Vita Travel, 2026
                </p>

              </div>


              <div className="p-5 sm:p-7">

                <p className="text-sm font-semibold text-gray-400">
                  Made by ✱ Phenomenon Studio
                </p>

              </div>


              <div className="p-5 sm:p-7 flex justify-start lg:justify-end">

                <p className="text-sm font-semibold text-gray-400">
                  Terms and Conditions
                </p>

              </div>


              <div className="p-5 sm:p-7">

                <p className="text-sm font-semibold text-gray-400">
                </p>

              </div>

            </div>

          </div>

        </footer>

      </section>
    </>
  );
};

export default Contacts;