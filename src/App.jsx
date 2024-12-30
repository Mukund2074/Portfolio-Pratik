import React from 'react'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Sidebar from './components/sidebar'

export default function App() {
  return (
    <main className='flex flex-col relative  min-h-screen bg-[#100425]'>
      <Sidebar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
