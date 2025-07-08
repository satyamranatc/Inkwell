import React from 'react'
import NavBar from "./Components/NavBar.jsx"
import Home from "./Pages/Home.jsx"
import Blog from "./Pages/Blog.jsx"


import {BrowserRouter,Route,Routes} from "react-router-dom"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
