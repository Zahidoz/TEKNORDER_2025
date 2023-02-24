import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer> 
       <div className='footer-c1'>
          <div className='footer-logo'>
            <img src='footer-logo.png'></img>
            <h1>teknorder</h1>
          </div>
          <div className='footer-links'>
              <div className='footer-link'>
                    <span>Ən çox verilən suallar</span>
                    <span>Kampaniyalar</span>
                    <span>Haqqımızda</span>
              </div>
              <div className='footer-link'>
                  <span>Xidmətlər</span>
                  <span>Partnyorlar</span>
                  <span>Markalar</span>
                  <span>Üzvlər</span>
              </div>
              <div className='footer-link'>
                  <span>Zəmanət</span>
                  <span>Şikayət və təkliflər</span>
                  <span>Əlaqə</span>
              </div>
          </div>
       </div>
       <div className='footer-c2'>
          <img className='size_logo' src='insta_logo.png'></img>
          <img className='size_logo' src='facebook_logo.png'></img>
          <img id='youtube_logo' src='youtube_logo.png'></img>
          <img className='size_logo' src='tiktok_logo.png'></img>
       </div>
    </footer>
  )
}

export default Footer