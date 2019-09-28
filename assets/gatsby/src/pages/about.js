import React from "react"
import { graphql } from "gatsby"
import Navigation from "../components/navigation"
import Header from "../components/header"
import SubHeader from "../components/subheader"

export default ({ data }) => (
  <div className="page" style={{ color: `teal` }}>
    <Navigation />
    <Header headerText={"About " + data.site.siteMetadata.title} />
    <SubHeader subheaderText="You can't live forever." />
    <div className="parallax"/>
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