import React from 'react'
import { Github } from 'lucide-react' // Clean, modern icon
import BlurText from './BlurText'

function NavBar() {
  return (
    <div className='text-white relative mx-auto max-w-7xl mt-4 px-6 py-4 bg-white/5 backdrop-blur-2xl rounded-4xl border border-[#2b2734] flex items-center justify-between'>
      
      <div className='flex items-center gap-3'>
        <Github size={40} className="text-white" />
        <BlurText
          text="Sudhanshu Bhartiya"
          delay={200}
          animateBy="words"
          direction="top"
          className="font-figtree text-3xl font-medium"
        />
      </div>

      {/* Right Section: Buttons */}
      <div className='flex items-center gap-4'>
        <button className='px-5 py-2 text-sm font-medium transition-all hover:text-gray-300'>
          Login
        </button>
        <button className='px-6 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-opacity-90 transition-all'>
          Get Started
        </button>
      </div>

    </div>
  )
}

export default NavBar