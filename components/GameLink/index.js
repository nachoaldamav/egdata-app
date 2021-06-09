import Link from "next/link"

export default function GameLink({ children, customAttributes }) {
  const image = customAttributes.find(
    (images) => images.key === "com.epicgames.app.productSlug"
  )
  const { key, value } = image
  const valueRAW = value
  const valueSTR = valueRAW.replace("/home", "")

  return (
    <Link href="/product/[id]" as={`/product/${valueSTR}`}>
      <a>{children}</a>
    </Link>
  )
}
