import Head from 'next/head'
import AppLayout from '../../components/AppLayout'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

function Post({ post }) {
    return (
      <AppLayout>
        <h1 className="text-5xl text-white text-left px-20 py-5">{post.title}</h1>
        <p className="text-white px-20"><ReactMarkdown className="game_description" plugins={[gfm]}>{post.body_markdown}</ReactMarkdown></p>
      </AppLayout>
    )
  }
  
  export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://dev.to/api/articles?username=srdrabx_26')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://dev.to/api/articles/${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
  }
  
  export default Post