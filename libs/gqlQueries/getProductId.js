import { gql } from "graphql-request"

export const productIddBySlug = gql`
  query productById($pageSlug: String!) {
    StorePageMapping {
      mapping(pageSlug: $pageSlug) {
        pageSlug
        mappings {
          offer(locale: "en-US") {
            effectiveDate
            id
            namespace
          }
          offerId
          pageId
        }
        pageSlug
        pageType
        productId
        sandboxId
        updatedDate
      }
    }
  }
`
