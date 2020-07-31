import Head from 'next/head'
import { Header } from '../components/Header'
import Car from '../components/Carousel'
import Testimonial from '../components/Testimonial'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Refinity</title>
      </Head>

      <main>
        <Header />
        <Car />
        <Testimonial />
        <Footer />
      </main>
    </div>
  )
}
