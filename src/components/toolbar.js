import React from 'react';
import { Link } from 'react-router-dom'

function Toolbar() {
  return(
    <div>
      <nav>
        <ul>
          <li><Link to="">Blog</Link></li>
          <li><Link to="/blog/1">Post 1</Link></li>
          <li><Link to="/blog/2">Post 2</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Toolbar;
