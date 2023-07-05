'use client'
import { usePathname } from "next/navigation"

import Image from "next/image"
import Link from "next/link"

import styles from "../src/app/header.module.css"

function Header() {

  const pathname = usePathname()
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>

        <Link href="/">
          <Image src="/img/logo.svg" alt="Logo imagen" width={300} height={40} />
        </Link>
        <nav className={styles.navegacion}>
          <Link href="/" className={pathname === "/" ? styles.active : ''}>
            Inicio
          </Link>

          <Link href="/nosotros" className={pathname === "/nosotros" ? styles.active : ''}>
            Nosotros
          </Link>
          <Link href="/blog" className={pathname === "/blog" ? styles.active : ''}>
            Blog
          </Link>
          <Link href="/tienda" className={pathname === "/tienda" ? styles.active : ''}>
            Tienda
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header