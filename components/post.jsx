import Image from "next/image"
import Link from "next/link"
import styles from "../src/app/styles/blog.module.css"
import { formatearFecha } from "../utils/helpers"

function Post({ posts }) {
    const { titulo, contenido, imagen, url, publishedAt } = posts
    console.log(url);
    return (
        <article>
            <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen post ${titulo}`} width={600} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`} className={styles.enlace}>Leer post</Link>
            </div>
        </article>
    )
}

export default Post