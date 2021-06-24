import { CookieBanner } from "@palmabit/react-cookie-law"
import { init, getPreferences, hide, show } from "cookie-though"
import { Twitter } from "iconoir-react"
import { useEffect } from "react"
import Link from "next/link"

const config = {
  policies: [
    {
      id: "essential",
      label: "Essential Cookies",
      description:
        "We need to save some technical cookies, for the website to function properly.",
      category: "essential",
    },
    {
      id: "functional",
      label: "Functional Cookies",
      category: "functional",
      description:
        "We need to save some basic preferences eg. language, customization...",
    },
    {
      id: "statistics",
      label: "Statistics",
      category: "statistics",
      description:
        "We need to save some technical cookies, for the website to function properly.",
    },
  ],
  essentialLabel: "Always on",
  permissionLabels: {
    accept: "Accept",
    acceptAll: "Accept all",
    decline: "Decline",
  },
  cookiePreferenceKey: "cookie-preferences",
  header: {
    title: "cookie though?",
    subTitle: "You're probably fed up with these banners...",
    description:
      "Everybody wants to show his best side - and so do we. That’s why we use cookies to guarantee you a better experience.",
  },
  cookiePolicy: {
    url: "https://inthepocket.com/cookie-policy",
    label: "Read the full cookie declaration",
  },
  customizeLabel: "Customize",
}

export default function AppLayout({ children }) {
  useEffect(() => {
    const cookiePreference = getPreferences()
    if (cookiePreference.isCustomised === true) {
      hide()
    } else {
      init(config)
      show()
    }
  })

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
    </div>
  )
}
