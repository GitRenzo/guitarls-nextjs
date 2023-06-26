import Image from 'next/image'
import Link from 'next/link'
import { outfit } from './utils/fonts'


export default function Home() {
  return (
    <main className={outfit.className}>

      <h1>Hola mundo en nextjs</h1>
      <Link href="/nosotros">Nosotros</Link>

    </main>
  )
}
