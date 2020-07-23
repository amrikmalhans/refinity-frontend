import Head from 'next/head'
import { Header } from '../components/Header'
import Car from '../components/Carousel'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Refinity</title>
      </Head>

      <main>
        <Header />
        <Car />
      </main>
    </div>
  )
}
