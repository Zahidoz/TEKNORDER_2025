import React from 'react'
import './Card.scss'

const Card = ({api}) => {
  return (
        <div className='card'>
          <div className='card-img-c'>
              <img src={api.img}></img>
          </div>
          <div>
            <div className='card-name-c'>
                <span>{api.desc1}</span>
                <h4>{api.name}</h4>
            </div>
            <div className='card-buy-c'>
                <button>İndi al</button>
            </div>
          </div>
          
      </div> 
    
  )
}

export default Card