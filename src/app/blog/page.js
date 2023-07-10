import Post from '../../../components/post'
import styles from "../styles/grid.module.css"

export const metadata = {
  title: 'GuitarLA - Blog',
  description: 'GuitarLA, Nosotros, Venta de guitarras',
}

import React from 'react'

async function Blog() {
  const posts = await getPosts()

  return (
    <main className='contenedor'>
      <h1 className='heading'>Blog</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Post
            key={post.id}
            posts={post.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog


async function getPosts() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const data = await respuesta.json()
  return data.data
}