import styles from "../../styles/guitarras.module.css"
import Image from "next/image";

export async function generateMetadata({ params }) {
    const guitarNameUppercase = params.url.charAt(0).toUpperCase() + params.url.slice(1)
    return {
      title: `GuitarLA - ${guitarNameUppercase}`,
    }
  }
   
async function Producto({ params }) {
    const guitarra = await getData(params.url)
    const {nombre, descripcion, precio, publishedAt, image} = guitarra[0].attributes

    return (
        <div className={styles.guitarra}>
            <Image src={image.data.attributes.formats.medium.url} alt={``} width={600} height={400}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>              
            </div>
        </div>
    )
}

export default Producto


async function getData(url) {
    const res = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const guitarra = await res.json()

    return guitarra.data
}
