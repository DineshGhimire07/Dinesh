import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Header />
      <section id="home"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}

export default App
