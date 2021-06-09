import Image from "next/image"

export default function ImageCard({ keyImages, title, id }) {
  const image = keyImages.find((images) => images.type === "OfferImageTall")
  const { type, url } = image

  return (
    <Image
      src={url}
      alt={type}
      width={250}
      height={333}
      layout="responsive"
      id={id}
      className="w-full rounded-md absolute transition duration-500 ease-in-out opacity-70 transform hover:opacity-100"
    />
  )
}
