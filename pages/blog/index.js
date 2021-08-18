import Head from "next/head"
import AppLayout from "../../components/AppLayout"
import useSWR from "swr"
import Link from "next/link"
import Image from "next/image"

export default function blog({ posts }) {
  return (
    <AppLayout>
      <div className="px-20">
        <p className="text-5xl text-white text-left py-5">Blog</p>
        {posts.map(
          ({ id, title, description, slug, cover_image, social_image }) => (
            <div key={id}>
              <Link href={`/blog/${id}`}>
                <a>
                  <Image
                    src={cover_image || social_image || "/egs_logo.png"}
                    width={700}
                    height={394}
                    layout="intrinsic"
                    className="rounded-md"
                    unoptimized={true}
                  />
                  <p className="text-xl text-white">{title}</p>
                  <p className="text-md text-white">{description}</p>
                </a>
              </Link>
            </div>
          )
        )}
      </div>
    </AppLayout>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://dev.to/api/articles?username=srdrabx_26")
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
