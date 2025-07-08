import React from 'react'

import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
        <h2>Inkwell</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
        
    </nav>
  )
}
