import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import remarkGfm from "remark-gfm"
import GameCard from "../../components/gameCard"
import GamePopUp from "../../components/gamePopUp"
import Image from "next/image"

function Test() {
  return <h1>Hello World</h1>
}

const components = { Test, GameCard, GamePopUp }

export default function TestPage({ source, title, image }) {
  return (
    <div className="md:m-10 text-white md:w-1/2 md:mx-auto">
      <Image
        src={image}
        width={600}
        height={350}
        layout="responsive"
        className="rounded-none md:rounded-lg"
        alt={title}
        unoptimized={true}
      />
      <h1 className="text-2xl font-bold w-full py-4">{title}</h1>
      <div className="wrapper text-white m-10">
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { source, title, image } = context.query

  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      format: "mdx",
    },
  })

  return {
    props: {
      source: mdxSource,
      title: title || "Hello world!",
      image:
        image ||
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GodofWar_SantaMonicaStudio_S1_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67",
    },
  }
}
