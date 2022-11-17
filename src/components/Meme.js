import React, { useState, useEffect } from 'react'

export default function Meme() {

   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg" 
   })
   const [memesArray, setMemesArray] = useState([])
   

   useEffect(() => {
      async function getMemes() {
          const res = await fetch("https://api.imgflip.com/get_memes")
          const json = await res.json()
          setMemesArray(json.data.memes)
      }

      getMemes()

   }, [])


   function getImage() {
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
   }

   function handleChange(event) {
       const {name, value} = event.target
       setMeme(prevMeme => ({  
         ...prevMeme,
         [name]: value
      }))
   }

    return (
        <main>
              <form className='form'>
                <input
                 type='text'
                 className='form-input' 
                 placeholder='Top Text'
                 value={meme.topText}
                 name="topText"
                 onChange={handleChange}
                 />
                <input
                 type='text'
                 className='form-input' 
                 placeholder='Bottom Text'
                 value={meme.bottomText}
                 name="bottomText"
                 onChange={handleChange}
                 />
                <button
                 type="button"
                 className='form-button'
                 onClick={getImage}
                 >Get a new meme image 🖼</button>
              </form>
              <div className='meme'>
                 <img src={meme.randomImage} alt="funny situation with some joke" />
                 <h2 className='meme-text top'>{meme.topText}</h2>
                 <h2 className='meme-text bottom'>{meme.bottomText}</h2>
              </div>
        </main>
    )
}