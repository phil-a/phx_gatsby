import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Index</Link>
    <Header headerText="About Gatsby" />
    <p>Woweee.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
