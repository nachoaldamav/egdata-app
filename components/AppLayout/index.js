import { Twitter } from "iconoir-react"
import Link from "next/link"

export default function AppLayout({ children }) {
  return (
    <>
      <div className="background-color h-full min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}

function Footer() {
  return (
    <div className="bg-gray-700">
      <div className="h-2/4 flex text-white justify-around py-4">
        <div className="text-center">
          <h2 className="text-2xl text-bold">Epic Games Data</h2>
          <h3 className="text-md">
            By{" "}
            <Link href="https://twitter.com/srdrabx">
              <a
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                SrDraBx
              </a>
            </Link>
          </h3>
          <h5 className="text-sm">
            EGDATA is not affilliated with Epic Games in any way.
          </h5>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="h-1/4 flex-col text-white pb-4 px-11 ">
          <div>Social Networks</div>
          <div className="flex text-right">
            <Link href="https://twitter.com/epicgamesdata">
              <a target="_blank" rel="noreferrer">
                <Twitter height={24} width={24} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  )
}
