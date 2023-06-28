import Image from "next/image"
import styles from "../nosotros.module.css"

export const metadata = {
  title: 'GuitarLA - Nosotros',
  description: 'Nosotros, guitarras, tienda online',
}

const Nosotros = () => {
  return (
    <main className='Contenedor'>
      <h2 className='heading'>Nosotros</h2>

      <div className={styles.contenido}>
        <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800} />
        <div>
          <p>
            Donec id leo maximus turpis tempus semper quis eget ante. Nam non leo scelerisque, porta nunc ac, gravida tortor.
            Nam purus nibh, finibus in vulputate lobortis, interdum sit amet nisi. Phasellus sodales massa urna, a semper arcu ornare at.
            Cras varius tincidunt ultrices. Donec ut ultricies augue. Cras id blandit libero, a tempus nunc. Phasellus vitae malesuada arcu.
            Ac cursus libero. Integer ut finibus sapien. Duis rutrum sapien lectus, vitae volutpat enim euismod id. Donec semper, nunc quis euismod iaculis.
            Erat turpis mattis justo, sit amet lacinia diam nisi et velit.
          </p>
          <p>
            Donec id leo maximus turpis tempus semper quis eget ante. Nam non leo scelerisque, porta nunc ac, gravida tortor.
            Nam purus nibh, finibus in vulputate lobortis, interdum sit amet nisi. Phasellus sodales massa urna, a semper arcu ornare at.
            Cras varius tincidunt ultrices. Donec ut ultricies augue. Cras id blandit libero, a tempus nunc. Phasellus vitae malesuada arcu.
            Ac cursus libero. Integer ut finibus sapien. Duis rutrum sapien lectus, vitae volutpat enim euismod id. Donec semper, nunc quis euismod iaculis.
            Erat turpis mattis justo, sit amet lacinia diam nisi et velit.
          </p>

        </div>
      </div>
    </main>
  )
}

export default Nosotros