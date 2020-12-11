import React, { useContext } from "react"
import ThemeContext from "./ThemeContext"

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const bg =
    theme == "dark"
      ? "body {background-color: #404042; color: red;}"
      : "body {background-color: #fff; color: #000;}"
  return (
    <div>
 <style>{bg}</style>
 {children}
    </div>
       
      
     
  )
}

export default Layout