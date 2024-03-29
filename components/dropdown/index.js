import React, { useState } from "react"
import ReactFlagsSelect from "react-flags-select"

export default function Dropdown(elements) {
  const countryStr =
    "US,GB,PL,RU,ID,CN,AD,AU,BE,CH,DK,FR,IE,IT,JP,NO,DE,ES,IL,MC,MX,PR,VA,BR,TR,CZ,LV,FI,NL,CA,KR,LT,PT,SE,AE,AT,CY,LU,MT,SA,SI,SK,BY,UA,EE,IN,EG"
  const countries = countryStr.split(",")

  let selected

  if (typeof window !== "undefined") {
    selected = localStorage.getItem("selectedCountry") || "US"

    // Set the selected country in the cookie with a max age of 1 year
    document.cookie = `selectedCountry=${selected}; max-age=31536000; path=/`
  }

  return (
    <ReactFlagsSelect
      searchable
      searchPlaceholder="Search countries"
      countries={countries}
      selected={selected}
      onSelect={(code) => updateCountry(code)}
      optionsSize={14}
      className="menu-flags md:pl-4 pb-0"
      selectButtonClassName="menu-flags-button"
      placeholder="Select Country"
    />
  )
}

async function updateCountry(code) {
  if (typeof window !== "undefined") {
    localStorage.setItem("selectedCountry", code)
    document.cookie = `selectedCountry=${code}; max-age=31536000; path=/`
  }
  location.reload()
}
