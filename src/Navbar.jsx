import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  console.log(location)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="top-0 left-0 border-b border-b-gray-700 fixed w-full z-[9999] bg-black/10 backdrop-blur-md">

        <div className="container">
          <div className="flex justify-between items-center">

            <div className="logo py-4 sm:py-[21px] px-4 sm:px-[30px] border-r border-r-gray-700">
              <Link to="/">
                <img
                  src="/image.webp"
                  className='w-24 sm:w-28 md:w-30 h-auto'
                  alt="Vita Travels"
                />
              </Link>
            </div>

            {/* Desktop Navbar */}
            <nav className="hidden md:block">
              <ul className='flex items-center text-white gap-4 lg:gap-8 px-4 lg:px-8'>

                <li>
                  <button
                    onClick={() => navigate("/retreats")}
                    className={`cursor-pointer hover:text-amber-300 ${location.pathname === "/retreats"
                        ? "text-amber-300"
                        : "text-white"
                      }`}
                  >
                    Retreats
                  </button>
                </li>

                {/* Coaches */}
                <li>
                  <Link
                    to="/coaches"
                    className={`cursor-pointer hover:text-amber-300 ${location.pathname === "/coaches"
                        ? "text-amber-300"
                        : "text-white"
                      }`}
                  >
                    Coaches
                  </Link>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    to="/contact"
                    className={`cursor-pointer hover:text-amber-300 ${location.pathname === "/contact"
                        ? "text-amber-300"
                        : "text-white"
                      }`}
                  >
                    Contact
                  </Link>
                </li>

                {/* Explore */}
                <li className="border-l border-gray-700 py-[11px] h-[58px] ml-[10px] flex items-center px-5 lg:px-[30px]">
                  <Link
                    to="/explore"
                    className={`cursor-pointer hover:text-amber-300 ${location.pathname === "/explore"
                        ? "text-amber-300"
                        : "text-white"
                      }`}
                  >
                    Explore
                  </Link>
                </li>

              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-2xl sm:text-3xl px-4 sm:px-5"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

          {/* Mobile Navbar */}
          {menuOpen && (
            <nav className="md:hidden bg-[#061c20] border-t border-gray-700">

              <ul className="flex flex-col text-white">

                <li className="border-b border-gray-700">
                  <button
                    onClick={() => {
                      navigate("/retreats")
                      setMenuOpen(false)
                    }}
                    className="w-full text-left px-6 py-4 hover:text-amber-300"
                  >
                    Retreats
                  </button>
                </li>

                <li className="border-b border-gray-700">
                  <Link
                    to="/coaches"
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 hover:text-amber-300"
                  >
                    Coaches
                  </Link>
                </li>

                <li className="border-b border-gray-700">
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 hover:text-amber-300"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/explore"
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 hover:text-amber-300"
                  >
                    Explore
                  </Link>
                </li>

              </ul>

            </nav>
          )}

        </div>
      </header>
    </>
  )
}

export default Navbar