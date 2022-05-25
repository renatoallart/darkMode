import React, { useState } from 'react'
import { Hero } from './components/Hero'
import {Navbar} from './components/Navbar'

export const App = () => {

  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(preValue => !preValue)
  }


  return (
    <div className='container'>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={isDark} />
      <Hero darkMode={isDark}/>
    </div>
  )
}
