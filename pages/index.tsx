import { NextSeo } from 'next-seo'
import React from 'react'

import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Skills from '../components/home/Skills'

import AppLayout from '../components/layouts/AppLayout'

export default function HomePage() {
  return (
    <>
      <NextSeo title="Home" />
      <AppLayout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </AppLayout>
    </>
  )
}
