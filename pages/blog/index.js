import Head from 'next/head'
import AppLayout from '../../components/AppLayout'
import useSWR from 'swr'
import Link from 'next/link'

export default function blog({ id }) {
    const { posts, isLoading, isError } = usePosts(id)
    if (isLoading) return (
        <AppLayout>
            <div className="container mx-auto px-6 py-2 content-center items-center">
                <p>Loading...</p>
            </div>
        </AppLayout>
    )
    if (isError) return (
        <AppLayout><p className="text-5xl text-white text-left py-5">Failed to load</p></AppLayout>
    )

    return (
        <AppLayout>
            <div className="px-20">
                <p className="text-5xl text-white text-left py-5">Blog</p>
                {posts.map(({ id, title, description, slug }) => (
                    <>
                    <Link href={`/blog/${slug}`}>
                        <a>
                        <p key={id} className="text-xl text-white">{title}</p>
                        <p>{description}</p>
                        </a>
                    </Link>
                    </>
                ))}
            </div>
        </AppLayout>
    )
}

function usePosts (props) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://dev.to/api/articles?username=srdrabx_26', fetcher)
    return {
      posts: data,
      isLoading: !error && !data,
      isError: error
    }
  }