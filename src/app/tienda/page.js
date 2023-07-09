import Guitarra from "../../../components/guitarra"
import styles from "../styles/grid.module.css"

export const metadata = {
  title: 'GuitarLA - Tienda',
  description: 'GuitarLA, Tienda, Venta de guitarras',
}

export default async function Tienda() {
  const guitarras = await getGuitars()
  return (
    <main className="contenedor">
      <h1 className="heading">Nuestra coleccion</h1>
      <div className={styles.grid}>
        {
          guitarras?.data.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))
        }
      </div>
    </main>
  )
}

async function getGuitars() {
  const respuesta = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  if (!respuesta.ok) {
    throw new Error('Failed to fetch data')
  }
  return respuesta.json()
}