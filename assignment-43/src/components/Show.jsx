import React from 'react'
import './Show.css'
import ImgHome from '../assets/home.png'
import { Link } from 'react-router-dom'
import HomeBtn from './HomeBtn/HomeBtn'

const Show = () => {
 return (
    <div className=' subtitle text-primary'>
      <p>Show Notes</p>
      <HomeBtn/>
      </div>
  )
}

export default Show