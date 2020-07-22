import Head from 'next/head'
import { Header } from '../components/Header'
import Mao from '../components/Carousel'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Refinity</title>
      </Head>

      <main>
        <Header />
        <Mao />
      </main>
    </div>
  )
}
