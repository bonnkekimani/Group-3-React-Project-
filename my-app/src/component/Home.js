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
            <div className='HHtitle'>
            <h1 style={{ fontSize: 70 }}>𝙃𝘼𝙉𝘿𝙔𝙈𝘼𝙉 <br/>𝙎𝙏𝙊𝙋𝙎𝙃𝙊𝙋</h1>

            </div> 
         </div>
         <About /> 
         <Services />
         <Reviews />
       

         
    </div>
  )
}

export default Home