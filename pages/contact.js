import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Hero } from '../components/contactPage/Hero'
import { ContactForm } from '../components/contactPage/Form'
import { Footer } from '../components/contactPage/Footer'
import { MainFooter } from '../components/mainFooter'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Refinity</title>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <ContactForm /> 
        <Footer />
        <MainFooter />
      </main>
    </div>
  )
}
