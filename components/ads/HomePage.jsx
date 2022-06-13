export default function Home1() {
  return (
    <div className="w-full h-fit flex flex-col text-white px-10 md:px-20 py-4 md:py-12">
      <h4 className="text-sm font-medium">Ad</h4>
      {process.env.NODE_ENV === "development" ? (
        <div className="bg-green-700 w-full h-24" />
      ) : (
        <ins
          className="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-5821873603989488"
          data-ad-slot="8968673191"
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-adtest={process.env.NODE_ENV === "development" ? "on" : "off"}
        ></ins>
      )}
    </div>
  )
}
