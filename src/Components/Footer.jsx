import React from 'react'

const Footer = () => {

  const styleIcons = {color: 'blue', fontSize: '20px', width: '40px', height: '40px'}

  return (
    <footer>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <div>
          <img src="./images/ico-facebook.png" style={styleIcons} alt="" />
          <img src="./images/ico-instagram.png" style={styleIcons} alt="" />
          <img src="./images/ico-tiktok.png" style={styleIcons} alt="" />
          <img src="./images/ico-whatsapp.png" style={styleIcons} alt="" />
        </div>
    </footer>
  )
}

export default Footer
