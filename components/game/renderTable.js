import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function RenderTable(countries, id) {
  countries.map((country, index) => {
    return RenderCountry(country, index, id)
  })
}

function RenderCountry(country, index, id) {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" })
  const { data, error } = useSWR(
    `https://raw.githubusercontent.com/srdrabx/prices-tracker-egs/main/database/prices/${country}/000f9a594ed44b3981272946d330d968.json`,
    fetcher
  )
  if (error)
    return (
      <tr key={index}>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
      </tr>
    )
  if (!data)
    return (
      <tr key={index}>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
      </tr>
    )
  return (
    <tr key={index}>
      <td className="tg-0lax">-</td>
      <td className="tg-0lax">-</td>
      <td className="tg-0lax">00.00$</td>
      <td className="tg-0lax">00.00$</td>
    </tr>
  )
}
