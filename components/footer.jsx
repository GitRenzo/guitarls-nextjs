"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import styles from "../src/app/footer.module.css"

function Footer() {
  const pathname = usePathname()
  return (
    <footer>
      <div className="contenedor">
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
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer