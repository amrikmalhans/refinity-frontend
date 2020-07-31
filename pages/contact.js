import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Hero } from '../components/contactPage/Hero'
import { ContactForm } from '../components/contactPage/Form'

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
      </main>
    </div>
  )
}
