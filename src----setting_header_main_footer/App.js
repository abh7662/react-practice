import React from "react"
import "./App.css"

import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"

// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component
const App = () => (
<div>
    <Navbar />
    <MainContent />
    <Footer />
</div>
)  
export default App