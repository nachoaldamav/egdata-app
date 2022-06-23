import { useEffect, useState } from "react"
import { useDetectAdBlock } from "adblock-detect-react"
import Script from "next/script"

const adUnitProps = {
  DEFAULT: {
    "data-ad-slot": "9905170712",
    "data-ad-format": "auto",
    "data-full-width-responsive": "true",
  },
}

export default function AdComponent({ variant = "DEFAULT" }) {
  const [failure, setFailure] = useState(false)
  const adBlockDetected = useDetectAdBlock()

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
        <>
          <ins
            className="adsbygoogle self-center"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5821873603989488"
            {...adUnitProps[variant]}
          />
          <Script id="ad" strategy="lazyOnload">
            {`
              (adsbygoogle = window.adsbygoogle || []).push({});
            `}
          </Script>
        </>
      )}
    </div>
  )
}
