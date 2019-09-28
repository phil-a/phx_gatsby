import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

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
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )

  return (
    <div className="posts-container">
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <div className="posts">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="post shadow" key={node.id}>
            <span>
              {node.frontmatter.date}
            </span>
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
            <p>{node.excerpt}</p>
            <div className="link-button">
              <Link to={node.fields.slug}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}