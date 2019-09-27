import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SubHeader from "../components/subheader"

export default ({ data }) => (
  <div class="page" style={{ color: `purple` }}>
    <Layout>
      <Header headerText={data.site.siteMetadata.title} />
      <SubHeader subheaderText="Breathing dreams like air." />
      <div class="parallax"/>
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
  }
`