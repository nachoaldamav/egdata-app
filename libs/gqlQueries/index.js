import { gql } from "graphql-request"

export const MainRequest = gql`
  query searchStoreQuery(
    $allowCountries: String
    $category: String
    $count: Int
    $country: String!
    $keywords: String
    $locale: String
    $namespace: String
    $itemNs: String
    $sortBy: String
    $sortDir: String
    $start: Int
    $tag: String
    $releaseDate: String
    $withPrice: Boolean = false
    $withPromotions: Boolean = false
    $priceRange: String
    $freeGame: Boolean
    $onSale: Boolean
    $effectiveDate: String
  ) {
    Catalog {
      searchStore(
        allowCountries: $allowCountries
        category: $category
        count: $count
        country: $country
        keywords: $keywords
        locale: $locale
        namespace: $namespace
        itemNs: $itemNs
        sortBy: $sortBy
        sortDir: $sortDir
        releaseDate: $releaseDate
        start: $start
        tag: $tag
        priceRange: $priceRange
        freeGame: $freeGame
        onSale: $onSale
        effectiveDate: $effectiveDate
      ) {
        elements {
          title
          id
          namespace
          description
          effectiveDate
          keyImages {
            type
            url
          }
          catalogNs {
            mappings {
              pageSlug
            }
          }
          currentPrice
          seller {
            id
            name
          }
          productSlug
          urlSlug
          url
          tags {
            id
          }
          items {
            id
            namespace
          }
          customAttributes {
            key
            value
          }
          categories {
            path
          }
          price(country: $country) @include(if: $withPrice) {
            totalPrice {
              discountPrice
              originalPrice
              voucherDiscount
              discount
              currencyCode
              currencyInfo {
                decimals
              }
              fmtPrice(locale: $locale) {
                originalPrice
                discountPrice
                intermediatePrice
              }
            }
            lineOffers {
              appliedRules {
                id
                endDate
                discountSetting {
                  discountType
                }
              }
            }
          }
          promotions(category: $category) @include(if: $withPromotions) {
            promotionalOffers {
              promotionalOffers {
                startDate
                endDate
                discountSetting {
                  discountType
                  discountPercentage
                }
              }
            }
            upcomingPromotionalOffers {
              promotionalOffers {
                startDate
                endDate
                discountSetting {
                  discountType
                  discountPercentage
                }
              }
            }
          }
        }
        paging {
          count
          total
        }
      }
    }
  }
`
