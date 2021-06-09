import React from "react"
import ContentLoader from "react-content-loader"

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Renderloader() {
  return (
    <>
      {array.map((index) => (
        <>
          <ContentLoader
            speed={2}
            width={250}
            height={350}
            viewBox="0 0 250 350"
            backgroundColor="#011827"
            foregroundColor="#374151"
          >
            <rect x="25" y="302" rx="3" ry="3" width="100" height="11" />
            <rect x="25" y="320" rx="3" ry="3" width="37" height="12" />
            <rect x="23" y="15" rx="0" ry="0" width="221" height="280" />
          </ContentLoader>
        </>
      ))}
    </>
  )
}
