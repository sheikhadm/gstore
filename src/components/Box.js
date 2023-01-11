import React from 'react'

export default function Box({gam}) {
  function HandleClick(){
   const body = {
    name:gam.name,
    price:gam.price,
    img:gam.img,
    stock:gam.stock
   }
   const options ={
    Method:"POST",
    Body:JSON.stringify(body),
    Headers:{
      "Content-Type":"application/json"
    }
   }
   fetch('http://localhost:5000/Price',options)
  }
  return (
    <div >
        <div className='box'>
           <div className='imgp'>
            <img src={gam.img} className="log"/> 
           </div>
           <div className='p'>
            <h3>{gam.name}</h3>
            <h4>${gam.price}</h4>
            <button onClick={HandleClick}>Add to Cart</button>
           </div>
        </div>
    </div>
  )
}
