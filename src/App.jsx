import axios from "axios";
import { useState } from 'react'
import './App.css'

function App() {
  const [foto, setFoto] = useState('')
  const [loading, setLoading] = useState(false)

  const changeImage = async () => { 
    setLoading(true)

    try {
      const response = await axios.get("https://api.pexels.com/v1/search?query=nature",{
        headers: {
          Authorization: "nwLxfG1DgMsC2iDbB3HkQTIz4WfDD3l6mXdcYeWs4bh9jTg44Nsx9z7U"
        }
      })
      const number =Math.floor(Math.random() * 15);
      setFoto(response.data.photos[number].src.original);
      
    } 
    catch (error) {
      console.error('Error al obtener la foto:', error);        } 
    finally {
      setLoading(false)
    }       
  }

  

  return (
    <div className="container">
      <img className="image" src={loading ? '' : `${foto}`} alt="Photo" />
      <button className='button' onClick={changeImage}>{loading ? 'Loading...' : 'Get new image'}</button>
      
    </div>
  )
}

export default App
