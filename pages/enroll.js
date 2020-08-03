import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/contactPage/Footer'
import { MainFooter } from '../components/mainFooter'
import { EnrollHero } from '../components/enrollPage/hero'
import { ContactForm } from '../components/contactPage/Form'

export default function Home() {
  return (
    <>
      <Head>
        <title>Refinity</title>
      </Head>

      <main>
        <Navbar />
        <EnrollHero />
        <Footer />
        <MainFooter />
      </main>
    </>
  )
}
