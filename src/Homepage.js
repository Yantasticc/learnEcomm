import React from 'react'
import './Homepage.css'
import Sidenav from './navigation/Sidenav'

function Homepage() {
  return (
    <div>
        <div className='homepage'>
            <div className='homepage__nav'>
                <Sidenav />
            </div>
        </div>
    </div>
  )
}

export default Homepage
 