import Image from "next/image"
import Link from "next/link"
import styles from "../src/app/guitarras.module.css"

function Guitarra({ guitarra }) {
  const { nombre, descripcion, precio, image, url } = guitarra
  return (
    <div className={styles.guitarra}>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen guitarra ${nombre}`} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`guitarras/${url}`} className={styles.enlace}>
          Ver producto
        </Link>
      </div>
    </div>
  )
}

export default Guitarra