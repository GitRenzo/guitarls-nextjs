import Image from "next/image"
import Link from "next/link"
import logo from "../public/img/logo.svg"
function Header() {
  return (
    <header className='contenedor'>
        <img src="/img/logo.svg" alt="Logo imagen" width={300} height={40} />
        <nav>
          <Link href="/">
              Inicio
          </Link>
          
          <Link href="/nosotros">
              Nosotros
          </Link>
          <Link href="/blog">
              Blog
          </Link>
          <Link href="/tienda">
              Tienda
          </Link>
        </nav>
    </header>
  )
}

export default Header