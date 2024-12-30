import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBehance, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

export default function Contact() {

  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.5,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('pratik_mail', 'admin_side', e.target, '5xn0yI3a_A4itFu8l')
      .then((result) => {
        console.log(result.text);
        // alert('Your message has been sent successfully to your email!');
      }, (error) => {
        console.log(error.text);
        alert('Sorry, an error occurred while sending email to your email address. Please try again later.');
      });

    emailjs.sendForm('pratik_mail', 'user_side', e.target, '5xn0yI3a_A4itFu8l', {
      to_email: formData.email,
    })
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent successfully to the ' + formData.email + ' email!');

      }, (error) => {
        console.log(error.text);
        alert('Sorry, an error occurred while sending email to the user\'s email address. Please try again later.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  };


  return (
    <React.Fragment>
      <section ref={ref} id='contact' className='min-h-[calc(100vh-64px)] max-w-[100dvw]  px-4 overflow-hidden flex flex-col items-center justify-center md:px-32 border-t-[1px] md:border-t-0'>
        <motion.div className='max-w-[100dvw] overflow-hidden'
          initial={{ opacity: 0, x: -900 }}
          animate={{
            opacity: inView ? 1 : 0,
            x: inView ? [-900, 100, 0] : -400,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >

          <span className={`w-full spb-slow flex flex-col items-center p-2 md:p-4 `}>

            <h1 className='text-3xl md:text-5xl font-bold gradient-text'>Contact Me</h1>
            <p className='text-sm md:text-2xl text-gray-300 mt-4'>If you have any questions or need help, please don't hesitate to contact me.</p>

            <form onSubmit={sendEmail} className='mt-4 flex flex-col w-full gap-4 p-6 ' action="">

              <span className='flex flex-col w-full md:flex-row gap-4 justify-center items-center '>

                <label className='flex flex-col rounded-xl border-[1px] border-cyan-400 px-4 py-2 w-full md:min-w-[30dvw] ' htmlFor="name">
                  <span className='font-semibold text-slate-400'>Name</span>
                  <input type='text' name={'name'} onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} placeholder="Enter your name"
                    className={`bg-transparent border-none focus:outline-none p-2 placeholder:text-slate-400  w-full text-white`} />
                </label>

                <label className='flex flex-col rounded-xl border-[1px] border-cyan-400 px-4 py-2 w-full md:min-w-[30dvw] ' htmlFor="email">
                  <span className='font-semibold text-slate-400'>Email</span>
                  <input type='text' name={'email'} onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} placeholder="Enter your email"
                    className={`bg-transparent border-none focus:outline-none p-2 placeholder:text-slate-400  w-full text-white`} />
                </label>

              </span>

              <label className='flex flex-col rounded-xl border-[1px] border-cyan-400 px-4 py-2 min-w-full ' htmlFor="message">
                <span className='font-semibold text-slate-400'>Message</span>
                <textarea type='text' onChange={(e) => setFormData({ ...formData, message: e.target.value })} value={formData.message} name={'message'} placeholder="Enter your message"
                  className={`bg-transparent border-none focus:outline-none p-2 placeholder:text-slate-400  w-full text-white`} />
              </label>

              <button type='submit' className={`spb transition-all text-white mx-auto w-full md:w-1/2x mt-4 duration-300 ease-in-out transform `}>
                Submit
              </button>


            </form>



          </span>

        </motion.div>



      </section>

      <footer className='w-full bg-[#100425] flex flex-col gap-4 px-4 justify-center'>
        <span className='w-full flex flex-col md:flex-row items-center gap-2 md:gap-16  p-2 px-8 rounded-xl text-white'>

          <span id='links' className=' flex items-center  gap-4'>
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
    </React.Fragment>
  )
}
