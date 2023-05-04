import React from 'react'
import handyman from "../assests/handyman.jpg"
import About from './About'
import Services from './Services'
import Reviews from './Reviews'


function Home() {
  return (
    <div>
        <div className='homepage'>  
            <img src={handyman} className='handypic' alt='Page not found'/>     
         </div>
         <About /> 
         <Services />
         <Reviews />

         
    </div>
  )
}

export default Home