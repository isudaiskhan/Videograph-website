import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Layout from '../../Components/Layout/Layout'
import Servicess from '../../Components/Servicess/Servicess'
import Work from '../../Components/Work/Work'
import Counter from '../../Components/Counter/Counter'
import Team from '../../Components/Team/Team'
import Blog from '../../Components/Blog/Blog'
import CallToAction from '../../Components/CallToAction/CallToAction'
import Footer from '../../Components/Footer/Footer'
import ScrollButton from '../../Components/ScrollButton/ScrollButton'


const Home = () => {
  return (
    <>
    <Layout>
    <Hero/>
    <Servicess />
    <Work />
    <Counter />
    <Team />
    <Blog />
    <CallToAction />
    <Footer />
    <ScrollButton />
    </Layout>
      
    </>
  )
}

export default Home