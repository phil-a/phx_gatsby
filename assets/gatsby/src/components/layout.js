import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Navigation from "../components/navigation";
export default ({ children }) => {

  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}