import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"

export const NavBar = () => {
  return (
        <nav>
            <div>🍬</div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <CartWidget />
        </nav>
  )
}
