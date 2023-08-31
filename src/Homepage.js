import React from 'react'
import './Homepage.css'
import Sidenav from './navigation/Sidenav'
import Products from './products/products'

function Homepage() {
  return (
    <div>
        <div className='homepage'>
            <div className='homepage__nav'>
                <Sidenav />
            </div>
            <div className='homepage__products'>
                <Products/>
            </div>
        </div>
    </div>
  )
}

export default Homepage
 