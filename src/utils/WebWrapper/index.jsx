import React from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

function LayoutWrapper({children}) {
    return (
      <>
      <Header />
      {children}
      <Footer />
      </>
    )
  }
  
  export default LayoutWrapper