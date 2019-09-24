import React from "react"
import Navigation from "../components/navigation"
import Header from "../components/header"
import SubHeader from "../components/subheader"

export default () => (
  <div class="page" style={{ color: `purple` }}>
    <Navigation />
    <Header headerText="The Great Gatsby" />
    <SubHeader subheaderText="Breathing dreams like air." />
    <div class="parallax"/>
  </div>
)
