import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default ({children}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="navigation">
      <Link to="/">{data.site.siteMetadata.title}</Link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/about">About</Link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/files">Files</Link>
    </div>
  )
}