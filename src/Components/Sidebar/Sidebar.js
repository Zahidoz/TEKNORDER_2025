import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='name'>
          <h2>Kateqoriyalar</h2>
        </div>
        <div className='filter'>
            <button>Popular</button>
        </div>
        <div className='links'>
          <ul>
            <li><a>Laptoplar</a></li>
            <span></span>
            <li><a>Oyun aksesuarları</a></li>
            <span></span>
            <li><a>Qulaqlıqlar</a></li>
            <span></span>
            <li><a>Komputer avadanlıqları</a></li>
            <span></span>
            <li><a>Fotoaparatlar</a></li>
            <span></span>
            <li><a>Digər</a></li>
            <span></span> 
          </ul>
        </div>
    </div>
  )
}

export default Sidebar