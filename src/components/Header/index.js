import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="nav-cont">
    <div className="logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="wave">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <l className="item">
        <Link to="/about">About</Link>
      </l>
      <li className="item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
