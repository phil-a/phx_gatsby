import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
  )

  return (
    <div class="posts">
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div class="post shadow" key={node.id}>
            <span>
              {node.frontmatter.date}
            </span>
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </div>
  )
}