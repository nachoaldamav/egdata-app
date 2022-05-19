import { gql } from "graphql-request"

export const getProductById = gql`
  query catalogQuery(
    $productNamespace: String!
    $offerId: String!
    $locale: String
    $country: String!
    $includeSubItems: Boolean!
  ) {
    Catalog {
      catalogOffer(
        namespace: $productNamespace
        id: $offerId
        locale: $locale
      ) {
        title
        id
        namespace
        description
        effectiveDate
        lastModifiedDate
        expiryDate
        isCodeRedemptionOnly
        keyImages {
          type
          url
        }
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
        tags {
          id
          name
        }
        price(country: $country) {
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
      }
      offerSubItems(namespace: $productNamespace, id: $offerId)
        @include(if: $includeSubItems) {
        namespace
        id
        releaseInfo {
          appId
          platform
        }
      }
    }
  }
`
