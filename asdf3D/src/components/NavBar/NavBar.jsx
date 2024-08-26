import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <div>
        <nav>
            <div>🍬</div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <CartWidget />
        </nav>
    </div>
  )
}
