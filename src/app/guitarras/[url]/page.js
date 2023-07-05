// import React from 'react'

// function Product({guitarra}) {
//     // console.log(typeof guitarra);
//     return (
//         <div>
//             {guitarra}
//         </div>
//     )
// }

// export default Product

// export async function getStaticProps({ query: { url } }) {
//     // This is how the URL should look like
//     // http://127.0.0.1:1337/api/guitars?filters[url]=vai&populate=image
//     const respuesta = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
//     console.log(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
//     const guitarra = await respuesta.json()
//     return {
//         props: {
//             guitarra
//         }
//     }
// }


// posts will be populated at build time by getStaticProps()
export default function Product({ posts }) {
    console.log(posts);
    return (
        <ul>
            {/* {console.log(posts)}
            {posts.map((post) => (
                <li>{post.title}</li>
            ))} */}
        </ul>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const res = await fetch("https://api.publicapis.org/entries")
    const posts = await res.json()
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

