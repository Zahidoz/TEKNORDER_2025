import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header>
        <div className='header-textbox'>
             <h1>OCULUS <br/>QUEST 2</h1>
             <p>Qutu daxilində virtual eynək, 2 ədəd idarəetmə kontrolleri, 
                type-c girişli adapter,üz interfeys slikionu və eynək taxanlar 
                üçün plastik mövcuddur
              </p>
              <button>İndi al</button>
        </div>
        <div className='header-imagebox'>
          <img src='day-day.png'></img>
        </div>
    </header>
  ) 
}

export default Header