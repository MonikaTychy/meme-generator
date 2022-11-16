import React from 'react'
import logo from '../images/logo.png'

export default function Header() {
    return (
        <div className='header'>
          <img src={logo} alt='troll face' className='header-logo' />
          <h2 className='header-title'>Meme Generator</h2>
        </div>
    )
}