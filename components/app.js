import React from "react"
import PropTypes from "prop-types"
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from "react-instantsearch-dom"
import Link from "next/link"
import AppLayout from "../components/AppLayout"
import Image from "next/image"
import Head from "next/head"

const HitComponent = ({ hit }) => (
  <div className="">
    <div key={hit.id} className="rounded-md pl-2 pr-2 game_card">
      <Link href={`/product/${hit.slug}`} target="">
        <a>
          <Image
            src={hit.OfferImageTall || "/egs_logo.png"}
            alt={hit.title}
            width={250}
            height={333}
            className="w-full rounded-md absolute transition duration-500 ease-in-out opacity-70 transform hover:opacity-100"
          />
          <div className="px-2 py-2">
            <div className="font-bold text-gray-50 text-base mb-2 game_title">
              {hit.title}
            </div>
            <div className="font-bold text-gray-400 text-sm mb-2 game_title">
              {hit.seller}
            </div>
            <div className="text-gray-200 text-base">
              {hit.discount > 0 && (
                <div className="text-gray-500 text-base inline font-sans">
                  <span className="tracking-wider leading-relaxed text-xs p-1 bg-blue-500 font-medium rounded-md no-underline text-white">
                    -{hit.discountPercentage}%
                  </span>
                  <div className="inline"> </div>
                  <div className="line-through inline">{hit.originalPrice}</div>
                </div>
              )}
              <div className="text-gray-100 text-base inline">
                {" "}
                {hit.currentPrice}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  </div>
)

HitComponent.propTypes = {
  hit: PropTypes.object,
}

export default class extends React.Component {
  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func,
    indexName: PropTypes.string,
    searchClient: PropTypes.object,
  }

  render() {
    return (
      <AppLayout>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
          />
          <link rel="stylesheet" href="instantsearch.css" />
        </Head>
        <div className="">
          <InstantSearch
            searchClient={this.props.searchClient}
            resultsState={this.props.resultsState}
            onSearchStateChange={this.props.onSearchStateChange}
            searchState={this.props.searchState}
            createURL={this.props.createURL}
            indexName={this.props.indexName}
            onSearchParameters={this.props.onSearchParameters}
            {...this.props}
          >
            <Configure hitsPerPage={12} />
            <header className="flex items-center justify-center py-3">
              <img
                className="items-center px-2"
                src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1610378794/Algolia_com_Website_assets/images/shared/algolia_logo/search-by-algolia-dark-background.png"
              />
              <SearchBox />
            </header>
            <main className="flex flex-wrap lg:flex-nowrap">
              <div className="menu flex-auto w-1/4 px-5 py-5">
                <RefinementList attribute="categories" limit={25} />
              </div>
              <div className="flex-auto">
                <Hits hitComponent={HitComponent} />
              </div>
            </main>
            <footer>
              <Pagination className="relative z-0 inline-flex shadow-sm -space-x-px" />
            </footer>
          </InstantSearch>
        </div>
      </AppLayout>
    )
  }
}
