import classNames from 'classnames';
import { outfit } from '../../utils/fonts'
import styles from "./styles/grid.module.css"
import Guitarra from '../../components/guitarra';
import Post from '../../components/post';

export default async function Home() {
  const allData = await getData()
  const guitarras = allData[0]
  const posts = allData[1]

  return (
    <>
      <main className="contenedor">
        <h1 className='heading'>Nuestros Productos</h1>
        <div className={styles.grid}>
          {
            guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))
          }

        </div>
      </main>

      <section className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Post
              key={post.id}
              posts={post.attributes}
            />
          ))}
        </div>
      </section>
    </>
  )
}

async function getData() {
  const urlGuitarras = `${process.env.API_URL}/guitars?populate=image`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts)
  ])

  const [{ data: guitarras }, { data: posts }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json()
  ])

  console.log(posts);

  return [guitarras, posts]
}