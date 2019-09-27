import React from "react"
import Navigation from "../components/navigation";
export default ({ children }) => {

  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}