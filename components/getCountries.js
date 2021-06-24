export default function getCountries() {
  const countryStr =
    "US,PL,RU,ID,CN,AD,AU,BE,CH,DK,FR,IE,IT,JP,NO,DE,ES,IL,MC,MX,IN,PR,VA,BR,TR,CZ,LV,FI,NL,CA,KR,LT,PT,SE,AE,AT,CY,LU,MT,SA,SI,SK,BY,UA,EE"
  const countries = countryStr.split(",")
  return countries
}
