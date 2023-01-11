import React from 'react'
import Box from '../components/Box'
import Navbar from '../components/navbar'

export default function GamePage() {
  const [games,setGames] = React.useState([])
  React.useEffect(() => {
    fetch(`http://localhost:5000/Games`)
    .then(res=> res.json())
    .then(json => setGames(json))
  
    
  }, [])
  const dat = games.length ===0 ? "Loading...." :  games.map((bin)=>{
    return   <Box key={bin.id} gam={bin}/>
})
  return (
    <div>
      <Navbar/>
      <div className='pop'>
      {dat}

      </div>
      
    </div>
  )
}
