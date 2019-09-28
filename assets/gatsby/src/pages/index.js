import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SubHeader from "../components/subheader"
import Posts from "../components/posts"

export default ({ data }) => (
  <div className="page">
    <Layout>
      <Header headerText={data.site.siteMetadata.title} />
      <SubHeader subheaderText="Breathing dreams like air." />

      <Posts />

      <div className="parallax"/>
    </Layout>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`