import React from 'react'
import { Link } from 'react-router-dom'
import logo from './fencin.png'

export default function Navbar() {
  return (
    <div>
        <header>
        <nav>
        <img src={`${logo}`} className="nav-logo"/>
            <h1 className="webname">PhotoRE</h1>
            <ul>
               <Link to={'/'}><li>Home</li></Link>
                <Link to={'/games'}><li>Games</li></Link>
                <Link to={'/cart'}> <button className="book-btn">Book Now</button></Link>
            </ul>
        </nav>
    </header>
    </div>
  )
}
