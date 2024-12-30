import React from 'react'
import { FaBehance, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

export default function Footer() {

    let hrefs = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    let quickLinks = [
        { icon: <FaBehance className='w-4 h-4' />, href: "https://www.behance.net/pm227" },
        { icon: <FaLinkedin className='w-4 h-4' />, href: "https://www.linkedin.com/in/pratik-mehta-b171a2235" },
        { icon: <FaEnvelope className='w-4 h-4' />, href: "mailto:pmehta0002@gmail.com" },
        { icon: <FaWhatsapp className='w-4 h-4' />, href: "https://wa.me/+918849932862" },
    ]

    return (
        <footer className='w-full bg-[#100425] flex flex-col gap-4 justify-center'>
            <span className='w-full flex flex-col md:flex-row items-center gap-2 md:gap-16 border-[1px] border-[#eceaeccd] p-2 px-8 rounded-xl text-white'>

                <span id='links' className=' flex items-center gap-4'>
                    {
                        hrefs.map((href, index) => {
                            return (
                                <a key={index} href={href.href} className='flex items-center '> {href.name} </a>
                            )
                        })
                    }

                </span>

                <span id='quick-links' className=' flex items-center md:ml-auto gap-4'>
                    {
                        quickLinks.map((quickLink, index) => {
                            return (
                                <a key={index} href={quickLink.href} className='w-12 h-12 flex items-center justify-center transition-all duration-300 ease-in-out p-2 bg-[#eceaeccd] hover:bg-white rounded-full text-black'>
                                    {quickLink.icon}
                                </a>
                            )
                        })
                    }
                </span>
            </span>

        </footer>
    )
}
