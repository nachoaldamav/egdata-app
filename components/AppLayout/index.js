import { CookieBanner } from '@palmabit/react-cookie-law'
import { init, getPreferences, hide, show } from 'cookie-though';

const config = {
  "policies": [
    {
      "id": "essential",
      "label": "Essential Cookies",
      "description": "We need to save some technical cookies, for the website to function properly.",
      "category": "essential",
    },
    {
      "id": "functional",
      "label": "Functional Cookies",
      "category": "functional",
      "description": "We need to save some basic preferences eg. language, customization...",
    },
    {
      "id": "statistics",
      "label": "Statistics",
      "category": "statistics",
      "description": "We need to save some technical cookies, for the website to function properly.",
    },
  ],
  "essentialLabel": "Always on",
  "permissionLabels": {
    "accept": "Accept",
    "acceptAll": "Accept all",
    "decline": "Decline"
  },
  "cookiePreferenceKey": "cookie-preferences",
  "header": {
      "title": "cookie though?",
      "subTitle": "You're probably fed up with these banners...",
      "description": "Everybody wants to show his best side - and so do we. That’s why we use cookies to guarantee you a better experience."
  },
  "cookiePolicy": {
    "url":"https://inthepocket.com/cookie-policy",
    "label":"Read the full cookie declaration",
  },
  "customizeLabel": "Customize",
};

export default function AppLayout ({children}) {
    if (typeof window !== "undefined") {
      const cookiePreference = getPreferences();
      console.log(cookiePreference)
      if (cookiePreference.isCustomised === true) {
        hide();
      } else {
        init(config);
        show();
      }
    }

    return (
      <>
        <div className="bg-gray-900 h-full min-h-screen">
          <main>
                {children}
          </main>
        </div>
      </>
    )
  }