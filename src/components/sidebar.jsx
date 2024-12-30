import React, { useState } from 'react'
import { BiBriefcaseAlt } from 'react-icons/bi'
import { FaHandshake, FaUserTie } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoHomeOutline } from 'react-icons/io5'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [open, setOpen] = useState(null)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleEnter = (index) => {
    setOpen(index)
  }

  const handleLeave = () => {
    setOpen(null)
  }

  const links = [
    { name: 'Home', link: '#', icon: <IoHomeOutline className='w-4 h-4 md:w-6 md:h-6 text-[#100425]' /> },
    { name: 'Expertise', link: '#experience', icon: <FaUserTie className='w-4 h-4 md:w-6 md:h-6 text-[#100425]' /> },
    { name: 'Projects', link: '#projects', icon: <BiBriefcaseAlt className='w-4 h-4 md:w-6 md:h-6 text-[#100425]' /> },
    { name: 'Contact', link: '#contact', icon: <FaHandshake className='w-4 h-4 md:w-6 md:h-6 text-[#100425]' /> },
  ]

  return (
    <aside
      id='sidebar'
      className={`fixed py-8 ml-4 left-0 top-0 h-screen overflow-hidden flex flex-col items-center text-white z-50 transition-all duration-300 ease-in-out `}
    >
      <button
        onClick={toggleSidebar}
        className={`bg-white self-start p-4 shadow-md shadow-[#523E7640] rounded-full text-[#100425] transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer md:hidden`}
      >
        <GiHamburgerMenu />
      </button>

      <ul className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 flex flex-col justify-center items-start mx-auto h-full w-full gap-4 transition-all duration-300 ease-in-out`}>
        {links.map((link, index) => {
          return (
            <li
              key={index}
              onClick={toggleSidebar}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={handleLeave}
              className={`${open === index ? 'md:max-w-full ' : 'md:max-w-16'
                } bg-white p-4 shadow-md shadow-[#523E7640] rounded-full text-[#100425] transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer`}
            >
              <a href={link.link} className='flex items-center justify-center gap-4 transition-all duration-300 ease-in-out'>
                {link.icon}
                <span
                  className={`transition-all duration-300 ease-in-out opacity-0 ${open === index ? 'opacity-100' : 'opacity-0'
                    } ${open === index ? 'translate-x-0 delay-100' : '-translate-x-4 delay-100 hidden'}`}
                >
                  <font className='hidden md:block'>{link.name}</font>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
