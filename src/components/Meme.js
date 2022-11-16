import React from 'react'

export default function Meme() {
    return (
        <main>
              <form className='form'>
                <input
                 type='text'
                 className='form-input' 
                 placeholder='Top Text' />
                <input
                 type='text'
                 className='form-input' 
                 placeholder='Bottom Text' />
                <button
                 className='form-button'>Get a new meme image 🖼</button>
              </form>
              <div className='meme'>
                 <img src='http://i.imgflip.com/1bij.jpg' alt="funny situation with some joke" />
                 <h2 className='meme-text top'>top text</h2>
                 <h2 className='meme-text bottom'>bottom text</h2>
              </div>
        </main>
    )
}