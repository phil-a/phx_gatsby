import React from "react"
import Navigation from "../components/navigation"
import Header from "../components/header"
import SubHeader from "../components/subheader"

export default () => (
  <div class="page" style={{ color: `teal` }}>
    <Navigation />
    <Header headerText="About Gatsby" />
    <SubHeader subheaderText="You can't live forever." />
    <div class="parallax"/>
  </div>
)
