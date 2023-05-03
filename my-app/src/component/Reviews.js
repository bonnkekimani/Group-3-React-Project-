import React from "react";
import ReviewCard from './ReviewCard';

function Reviews(){
    return(
        <div className="reviews">
            <div class='testimonies'>
                <h2>HANDYMAN TESTIMONIALS AND REVIEWS</h2>
            </div>
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
                  />
                <ReviewCard rating={5} review="We needed a few small handyman fixes around the house before 
                we moved out. This company was 1st class from customer service to the technician 
                that came out. They charge by the hour, but he was very expedient and knocked out 
                everything in one hour. Korey was very professional and we talked while he worked 
                to not make us feel like 'customers', but more like friends. I'd recommend them 
                for all your household fixes!!!"  />
                <ReviewCard rating={5} review="James from the Woodlands office is outstanding. We always ask 
                him to come back because he is thorough, does quality work and has thoughtful 
                recommendations and solutions for our needs. Mr Handyman reasonably priced and 
                very prompt and responsive to our needs. Highly recommend James and Mr Handyman if 
                you live in the Woodlands."  />
                <ReviewCard rating={5} review="Communication between the office and us was very good. They kept 
                us informed and up-dated. Patrick did an excellent job on the repair work around our 
                windows. He was professional, courteous and friendly. We would have no hesitation in 
                using their service again."  />
                <ReviewCard rating={5} review="Les Gray was our Service Technician and did a great job! He helped 
                us select the best door for home and installed it. We plan to take care of the staining 
                ourselves and he gave us advice on where to get the best materials and instructions for 
                how to. We will request Les in the future."  />
                <ReviewCard rating={5} review="We had a series of unfortunate events that led to a complete remodel 
                of the kids bathroom. They came out to give us a quote and even some ideas, ending with a 
                list of items we needed. They were on time and worked with our crazy schedule days before 
                Christmas. It's not done - we still have decorating to do. But the major stuff is in and 
                done beautifully! We also had an estimate from Rebath. These guys did what we asked 
                instead of telling us why their ideas were better for literally a fraction of the Rebath 
                estimate. I am thrilled and the kids love the new and improved bathroom. They will 
                definitely be our go to service from now on and even started us contemplating a master 
                bathroom makeover sometime soon."  />
            </div>
        </div>
    )
}
export default Reviews;