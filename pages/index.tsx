import { NextSeo } from 'next-seo'
import React from 'react'

import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Skills from '../components/home/Skills'

import AppLayout from '../components/layouts/AppLayout'

import { getPosts } from '../services/posts'

export async function getStaticProps() {
  try {
    const query = { pageSize: 3 }
    const posts = await getPosts(query)
    return {
      revalidate: 10,
      props: {
        posts: posts.results
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

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
