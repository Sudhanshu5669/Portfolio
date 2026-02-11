import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LiquidEther from './components/LiquidEther.tsx';
import './App.css'
import NavBar from './components/NavBar.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: '100%', height: '100%', position: 'absolute'}} className='bg-[#060111]'>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
/>
</div>
<div className='py-10'>
<NavBar/>
</div>

    </>
  )
}

export default App
