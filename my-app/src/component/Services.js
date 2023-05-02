import React, { useState } from 'react'

function Services() {
    const [cards]=useState([
       {
           title: 'Assembly',
           description:`Whether you don't have time or don't want the hassle,
            hiring a furniture assembly service is an ideal solution to get your items assembled fast and with worry. 
            From fences to futons and bikes to bookcases, you can rely on the experience and skill our professionals bring to the job.` 
         },
         {
            title: 'Carpentry',
            description:`No matter which rooms in your home need a makeover, 
            choosing the natural look of wood is a design choice that can match any decor. Are you thinking, 
            “Is there a carpenter near me I can trust with the skill to get the job done right?” Well, wonder no more! ` 
          },
 
          {
            title: 'Electrical',
            description:`Have household projects that involve electrical components? If it feels like
             overkill to hire an electrician, hire our handymen instead. We can install new features and 
             fix existing ones` 
          },
          {
            title: 'Installation',
            description:`When you’re ready to do away with the old and need help with the new, 
            your local Mr. Handyman is the answer. Our experienced home improvement professionals 
            can install everything, from household fixtures, floors, windows, 
            and doors to countertops, crown molding, and more.` 
          },
          {
            title: 'Maintenance',
            description:`The little things add up. That's why regular maintenance in and around the 
            home is especially important. With an average of 10 years' experience, all of our home improvement 
            professionals know exactly what to look for and how to fix it. ` 
          },
          {
            title: 'Painting',
            description:` A fresh coat of paint can breathe life into any room, exterior or piece of furniture. 
            Whether you have an indoor or outdoor paint job, our experienced team of home improvement professionals can help. 
            We know what makes a great paint job. And it's our mission to deliver the level of detail and professionalism that you expect and deserve.` 
          },
          {
            title: 'Plumbing',
            description:`Handyman services are usually small repairs. installations, or upgrades. 
            We use our wealth of construction knowledge to tackle the small stuff so it doesn't get bigger.
             We firmly believe you don't have to sacrifice mastery to be a Jack-of-all-trades. 
             It's what's required of the professionals you trust, 
             and it's why you invite us into your home. Sometimes, a few examples help to understand the scope and variety of handyman services.` 
          },
          {
            title: 'Remodelling',
            description:`Our trusted and insured handymen can help with any part of your remodeling 
            project. Whether you need a new floor or a new window installed, your local Mr. Handyman has the knowledge and experience. 
            You can depend on our Neighborly Done Right Promise.` 
          },
 
          {
            title: 'Repair',
            description:`When stuff breaks, your local Mr. Handyman is here to fix it. 
            Our home repair services can save you the time and money when it comes to fixing things around your home. 
            Our convenient, one-call solution for house repair jobs makes getting it all done easier. 
            And all our repair service is backed by our Done Right Promise, which means our job is not done until it’s right!` 
          },
 ]);
  return (
    <div className='Services'>
        <section>
        <h1>Services</h1>
                <h2>WHAT CAN OUR PROFESSIONALS DO FOR YOU?</h2>
            <div className='cards'>
               {
                cards.map((card,i)=>(
                    <div key={i} className='card'>
                  <h3>{card.title}</h3>
                <p>
                    {card.description}
                </p>
                    <button id ='BtnService'>Request Service</button>
                         
                    </div>
                ))
               } 
            
            </div>
        
        </section>
        
        </div>
  )
}

export default Services