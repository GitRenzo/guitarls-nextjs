import Image from "next/image"
import logo from "../public/img/logo.svg"
function Header() {
  return (
    <header className='contenedor'>
        <img src={logo.src} alt="Logo imagen" width={300} height={40} />
    </header>
  )
}

export default Header