import React, { useState } from "react";
import ReviewCard from './ReviewCard';

function Reviews(){



    return(
        
                
        <div className="reviews">
            <div class='testimonies'>
               <marquree> <h2>HANDYMAN TESTIMONIALS AND REVIEWS</h2> </marquree>
            </div><br></br>
            <div class='review-details'>
                <p>
                Don’t just take our word for it; see what real Mr. Handyman customers have to 
                say about our workmanship and services. The handyman reviews 
                </p>
            </div>
            <div class='first-rev'>
                <p>
                featured below 
                are from actual home improvement projects, ranging from simple repairs to 
                full-on remodels. You’ll see that you really can count 
                </p>
            </div>
            <div class='last-rev'>
                <p>
                on your local 
                Mr. Handyman to get the job done right and on time.
                </p>
            </div>
            <div class='review-card'>
                <ReviewCard rating={5} review="Herman was punctual, finished his work on time, cleaned up
                 the area and was professional. I would highly recommend his services." 
                 name="Bruce Jones , O’Fallon, IL" />
                <ReviewCard rating={5} review="We needed a few small handyman fixes around the house before 
                we moved out. This company was 1st class from customer service to the technician 
                that came out. They charge by the hour, but he was very expedient and knocked out 
                everything in one hour. Korey was very professional and we talked while he worked 
                to not make us feel like 'customers', but more like friends. I'd recommend them 
                for all your household fixes!!!" name="Tammy , Kansas City, MO" />
                <ReviewCard rating={5} review="James from the Woodlands office is outstanding. We always ask 
                him to come back because he is thorough, does quality work and has thoughtful 
                recommendations and solutions for our needs. Mr Handyman reasonably priced and 
                very prompt and responsive to our needs. Highly recommend James and Mr Handyman if 
                you live in the Woodlands." name="John M , Wallington, NJ" />
                <ReviewCard rating={5} review="Communication between the office and us was very good. They kept 
                us informed and up-dated. Patrick did an excellent job on the repair work around our 
                windows. He was professional, courteous and friendly. We would have no hesitation in 
                using their service again." name="Sean Jones , Conroe, TX" />
                <ReviewCard rating={5} review="Les Gray was our Service Technician and did a great job! He helped 
                us select the best door for home and installed it. We plan to take care of the staining 
                ourselves and he gave us advice on where to get the best materials and instructions for 
                how to. We will request Les in the future." name="Huffmans , The Colony, TX" />

            </div>
        </div>
    )
}
export default Reviews;