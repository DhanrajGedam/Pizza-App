import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'
function Footer() {
  return (
    <>
    <div className="footer">
        <div className="socialMedia">
            <FacebookIcon /><LinkedInIcon />
            
        </div>
        <p>&copy; 2023 <i><b>DhanrajPizzeria.com</b></i></p>

     </div>
    </>
  )
}

export default Footer
