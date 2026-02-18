import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LiquidEther from './components/LiquidEther.tsx';
import './App.css'
import NavBar from './components/NavBar.tsx';
import TextType from './components/TextType.tsx';

function App() {
  return (
    <>
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-[#060111]"
      >
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.9}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Navbar stays normal */}
      <NavBar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl -mt-100">
          <TextType
            typingSpeed={25}
            pauseDuration={1500}
            showCursor
            cursorCharacter="█"
            text={[
              "I am Sudhanshu.",
              "Developer. Writer. Creative.",
              "Let's build some amazing experiences!"
            ]}
            deletingSpeed={20}
            variableSpeed={{ min: 60, max: 120 }}
            cursorBlinkDuration={0.5}
            textColors={["#ffffff"]}
            cursorClassName="text-white"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          />
        </div>
      </section>
    </>
  )
}


export default App
