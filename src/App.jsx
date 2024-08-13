import { useState } from 'react'
import Header from './components/Header/Header'
import MainContent from './components/PageSections/MainContent/MainContent'
import AboutMe from './components/PageSections/AboutMe/AboutMe'
import MyProjects from './components/PageSections/MyProjects/MyProjects'

function App() {

  return (
    <>
     <Header/>
     <MainContent/>
     <AboutMe/>
     <MyProjects/>
    </>
  )
}

export default App
