import React from 'react'
import Navbar from '../components/navbar'

export default function HomePage() {
  const [latest,setLatest] = React.useState([])
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1dba8ff7b3mshbee7d2e0af7ef0fp1a9013jsnd98a8c9aa95c',
      'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
    }
  };
  React.useEffect(()=>{
    fetch('https://free-epic-games.p.rapidapi.com/free', options)
    .then(response => response.json())
    .then(response => setLatest(response))
    .catch(err => console.error(err));
},[])
const day = latest.length ===0 ? "Loading...." :  latest.freeGames.upcoming.map((bin)=>{
  return   <div className="epic" key={bin.id}>
            <div className='imgp'>
             <img src={bin.keyImages[0].url} className="log"/>  
           </div>
           <div className='ep'>
            <h2>{bin.title}</h2>
            <p>{bin.description}</p>
           </div>
</div>
})

  return (
    <div>
        <main >
        <Navbar/>
        </main>
        <section className="pin">
           <h1></h1>
            {day}
        </section>
    </div>
  )
}
