import React from 'react'
import BlurText from './BlurText'

function NavBar() {
  return (
    <div className='text-white relative mx-auto max-w-7xl pt-4 pb-4 pl-2 bg-white/5 backdrop-blur-2xl rounded-4xl border border-[#2b2734]'>
      <BlurText
  text="Sudhanshu Bhartiya"
  delay={200}
  animateBy="words"
  direction="top"
  className="text-2xl"
/>
    </div>
  )
}

export default NavBar
