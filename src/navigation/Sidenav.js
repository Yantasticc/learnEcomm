import React from 'react'
import './Sidenav.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Sidenav() {
  return (
    <div>

      <div className='sidenav'>
        <div className='sidenav__buttons'>
          <button className='sidenav__button'>
            <span> Categories </span>
          </button>

          <button className='sidenav__button'>
            <span> Products </span>
          </button>
          
          <button className='sidenav__button'>
            <ShoppingCartIcon />
          </button>
        </div>
      </div>

    </div>
  )
}

export default Sidenav

