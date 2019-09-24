import React from "react"
import { Link } from "gatsby"

export default props => (
  <div class="navigation">
    <Link to="/">Index</Link>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link to="/about">About</Link>
  </div>
)