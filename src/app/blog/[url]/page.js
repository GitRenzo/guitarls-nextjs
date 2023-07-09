import Image from "next/image"
import { formatearFecha } from "../../../../utils/helpers";
import styles from "../../styles/blog.module.css"
import classNames from "classnames";

async function PostBlog({ params }) {
    const post = await getPost(params.url)
    const { titulo, contenido, imagen, publishedAt } = post[0].attributes
    console.log(imagen);
    return (
        <article className={`${styles.post} ${styles["mt-3"]}`}>
            <Image src={imagen.data.attributes.formats.medium.url} alt={` ${titulo}`} width={600} height={400} />
            <div className={styles.contenido}>
                <h1>{titulo}</h1>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
            </div>
        </article>
    )
}

export default PostBlog


async function getPost(url) {
    // http://127.0.0.1:1337/api/posts?filters[url]=como-elegir-tu-proxima-guitarra&populate=imagen
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const post = await respuesta.json()
    return post.data
}