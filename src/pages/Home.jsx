import React from 'react'
import { ReactTyped } from 'react-typed'

export default function Home() {
    return (
        <section id='home' className='min-h-screen min-w-full rounded-lg shadow-lg shadow-[#523E7640] flex flex-col md:flex-row justify-center items-center '
            style={{
                backgroundImage: "url('/assets/home-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

            <span className=' flex flex-col justify-center items-center'>
                <span className=' flex items-center gap-2'>
                    <ReactTyped className='text-4xl md:text-7xl font-bold text-white' strings={['PRATIK MEHTA']} typeSpeed={100} backDelay={500} backSpeed={100} loop />
                </span>
                <h2 className='text-2xl md:text-5xl font-semibold gradient-text'> <ReactTyped
                    strings={['UI/UX', 'GRAPHIC']} typeSpeed={50} backDelay={1000} backSpeed={50} loop />DESIGNER</h2>
                <p className='text-sm md:text-xl text-gray-300 font-semibold text-center tracking-wide md:max-w-[40%]'>
                    Hello, I'm Pratik Mehta, a passionate UI/UX designer from India. I specialize in creating visually stunning and user-friendly interfaces that captivate users and enhance their digital experiences.
                </p>

                <span className='flex gap-4'>
                    <a href="https://www.behance.net/pm227" className='bg-gradient-to-r from-[#0CCFCB] to-[#CD46C8] text-white border-[1px] rounded-full border-slate-200 px-4 py-2 mt-4 font-semibold' > BEHANCE PROFILE </a>
                    <a download={true} href='assets/Pratik_Mehta.pdf' className='bg-gradient-to-r from-[#0CCFCB] to-[#CD46C8] text-white border-[1px] rounded-full border-slate-200 px-4 py-2 mt-4 font-semibold' > RESUME </a>
                </span>

            </span>



        </section>
    )
}
