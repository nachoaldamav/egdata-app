import { useEffect, useState } from "react"
import { useDetectAdBlock } from "adblock-detect-react"

const adUnitProps = {
  DEFAULT: {
    "data-ad-slot": "7181773959",
    "data-ad-format": "auto",
    "data-full-width-responsive": "true",
  },
}

export default function AdComponent({ variant = "DEFAULT" }) {
  const [failure, setFailure] = useState(false)
  const adBlockDetected = useDetectAdBlock()
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
      setFailure(true)
    }
  }, [])

  return (
    <div
      className="w-full h-fit flex flex-col text-white px-10 md:px-20 py-4 md:py-12 overflow-hidden"
      style={{ minWidth: "300px", minHeight: "250px" }}
      aria-hidden={true}
    >
      <h4 className="text-sm font-medium">Ad</h4>
      {adBlockDetected || failure ? (
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
          {...adUnitProps[variant]}
        />
      )}
    </div>
  )
}
