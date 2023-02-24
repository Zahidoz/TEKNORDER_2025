import React, { useState } from 'react'
import './Section.scss'
import Sidebar from '../Sidebar/Sidebar'
import Card from'../Card/Card'
import getApis from './apis.json'

const Section = ({search}) => {
  return (
    <div className='section'>
        <div className='section-cards'>
         {
           getApis.filter(api=> api.keywords.toLowerCase().includes(search.toLowerCase())).map(api=>(
             <Card  api={api}/>
           ))
         }
        </div>
    </div>
  )
}

export default Section