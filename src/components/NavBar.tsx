import React from 'react'
import { Github } from 'lucide-react'
import BlurText from './BlurText'

function NavBar() {
  return (
    <div className='text-white relative mx-auto max-w-7xl mt-6 px-8 py-5 bg-white/5 backdrop-blur-2xl rounded-4xl border border-[#2b2734] flex items-center justify-between'>
      
      {/* Left Section: Icon + Name */}
      <div className='flex items-center gap-4'>
        <div className="flex items-center justify-center">
           <Github size={38} className="text-white shrink-0" />
        </div>
        <div className="leading-none">
          <BlurText
            text="Sudhanshu Bhartiya"
            delay={200}
            animateBy="words"
            direction="top"
            className="font-figtree text-3xl font-semibold tracking-tight"
          />
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className='flex items-center gap-6'>
        <button className='px-4 py-2 text-sm font-medium opacity-80 hover:opacity-100 transition-all'>
          Login
        </button>
        <button className='px-7 py-2.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-all shadow-lg'>
          Get Started
        </button>
      </div>

    </div>
  )
}

export default NavBar