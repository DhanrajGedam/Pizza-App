import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const MenuItem = (image, name, price) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})` }}></div>
        <div>{name}</div>
        <div><CurrencyRupeeIcon />{price}</div>
      
    </div>
  )
}

export default MenuItem
