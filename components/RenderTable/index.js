function RenderTable(countries) {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" })
  return countries.map((country, index) => {
    return (
      <tr key={index}>
        <td className="tg-0lax">{regionNames.of(country)}</td>
        <td className="tg-0lax">00.00$</td>
        <td className="tg-0lax">00.00$</td>
        <td className="tg-0lax">00.00$</td>
      </tr>
    )
  })
}
