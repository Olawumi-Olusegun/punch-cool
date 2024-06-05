
import React from 'react';
import Tabs from './_components/Tabs'
import WhyChooseUs from './_components/WhyChooseUs';
import Accordion from './_components/Accordion';
import Faq from './_components/Faq';
import FooterButtom from './_components/FooterButtom';
import StartAJourney from './_components/StartAJourney';
import HowItWorks from './_components/HowItWorks';
import DiagonalLines from './_components/DiagonalLines';
import Hero from './_components/Hero';
import Skills from './_components/Skills';


function Home() {

  return (
    <>
    {/* Hero section */}
    <section className='mt-10 md:mt-[144px] px-5'>
        <Hero />
    </section>

    <section className='mt-5 px-5'>
        <Tabs />
    </section>

    {/* Diagonal Lines */}
    <section className='-mb-16'>
      <DiagonalLines />
    </section>

    {/* Skills */}
    <section>
      <Skills />
    </section>

    {/* How it work */}
    <section className='-mt-10'>
      <HowItWorks />
    </section>
   
    {/* Accordion section */}
    <section>
      <Accordion />
    </section>
   
    {/* Start your journey */}
    <section>
      <StartAJourney />
    </section>

    {/* Why choose us */}
    <section>
      <WhyChooseUs />
    </section>

    {/* FAQ */}
    <section className='bg-gray-50 py-20 -skew-y-2 '>
      <Faq />
    </section>

    {/* footer section */}
    <section>
      <FooterButtom />
    </section>

    </>
  )
}

export default Home