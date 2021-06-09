import Head from "next/head"
import AppLayout from "./AppLayout"
import useSWR from "swr"
import Link from "next/link"

export default function Post({ id }) {
  const { post, isLoading, isError } = usePost(id)
  if (isLoading) {
    return (
      <AppLayout>
        <div className="container mx-auto px-6 py-2 content-center items-center">
          <p>Loading...</p>
        </div>
      </AppLayout>
    )
  }
  if (isError) {
    return (
      <AppLayout>
        <p className="text-5xl text-white text-left py-5">Failed to load</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="px-20">
        <>
          <p key={post.id} className="text-xl text-white">
            {post.title}
          </p>
          <p>{post.description}</p>
        </>
      </div>
    </AppLayout>
  )
}

function usePost(context) {
  const { params } = context
  const { slug } = params

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    `https://dev.to/api/articles?username=srdrabx_26/${slug}`,
    fetcher
  )
  return {
    post: data,
    isLoading: !error && !data,
    isError: error,
  }
}
