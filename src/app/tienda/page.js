import Guitarra from "../../../components/guitarra"

export const metadata = {
  title: 'GuitarLA - Tienda',
  description: 'GuitarLA, Tienda, Venta de guitarras',
}

export default async function Tienda() {
  const guitarrasData = await getGuitars()
  return (
    <main className="contenedor">
      <h1 className="heading">Nuestra coleccion</h1>
      {
        guitarrasData.data.map(guitarra => (
          <Guitarra
            key={guitarra.id}
            guitarra={guitarra.attributes}
          />
        ))
      }
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