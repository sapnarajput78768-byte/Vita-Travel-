import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
 const location = useLocation()

  console.log(location)
  const navigate = useNavigate()
  return (
    <>
    <header className=" border-b border-b-gray-700 fixed  w-full z-9999     bg-black/10 backdrop-blur-md  ">

      <div className="container  ">
        <div className="flex justify-between items-center ">
          <div className="logo  py-[21px] px-[30px] border-r-1 border-r-gray-700">
            <a href="/"><img src="/image.webp" className='w-30   h-[16px]' alt="Vita Travels"/></a>
          </div>
          <nav>
            <ul className='flex items-center text-white gap-[10px]  hover:text-amber-300 text-2px px-[10px] '>
              {/* <li><Link to={"/retreats"}>Retreats</Link></li> */}
               <li>
                <button onClick={() => navigate("/retreats")}className={`cursor-pointer hover:text-amber-300 ${location.pathname === "/retreats"? "text-amber-300": "text-white"}`}>
                  Retreats
                </button>
              </li>
              
              {/* Coaches */}
              <li>
                <Link to="/coaches"className={`cursor-pointer hover:text-amber-300 ${location.pathname === "/coaches"? "text-amber-300": "text-white"}`}>
                  Coaches
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link to="/contact"className={`cursor-pointer hover:text-amber-300 ${location.pathname === "/contact"? "text-amber-300": "text-white"}`}>
                  Contact
                </Link>
              </li>

              {/* Explore */}
              <li className="border-l border-gray-700 py-[11px] h-[58px] ml-[10px] flex items-center px-[30px]">
                <Link to="/explore"className={`cursor-pointer hover:text-amber-300 ${location.pathname === "/explore"? "text-amber-300": "text-white"}`}>
                  Explore
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </>


  )
}

export default Navbar