import Head from 'next/head'
import { Header } from '../components/Header'
  
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Refinity</title>
      </Head>

      <main>
        <Header />
      </main>
    </div>
  )
}
