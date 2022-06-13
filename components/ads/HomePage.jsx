import { useEffect, useState } from "react"

export default function Home1() {
  const [failure, setFailure] = useState(false)
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
      setFailure(true)
    }
  }, [])

  return (
    <div className="w-full h-fit flex flex-col text-white px-10 md:px-20 py-4 md:py-12">
      <h4 className="text-sm font-medium">Ad</h4>
      {failure ? (
        <div className="border-2 border-green-700 w-full h-24 flex flex-col items-center justify-center">
          <p className="text-sm text-white font-medium">
            Please disable Adblock to help us to improve this website.
          </p>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
          data-ad-slot="7181773959"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </div>
  )
}
