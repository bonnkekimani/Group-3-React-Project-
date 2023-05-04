import React from "react";

function Work(){
    return(
        <div className="work">
            <div class='wtitle'>
                <h2>HOW WE WORK</h2>
            </div>
            <div class='wsubtitle'>
                <h3>Hiring a service should be easy. <br></br>Here's what you can expect
                     when you hire us.</h3>
            </div>
            <div class='wcontent'>
                <div className="scheduling">
                    <h3>SCHEDULING</h3>
                    <p>
                        Scheduling with Mr. Handyman is easy. Just one simple phone call hires 
                        a seasoned professional who will care for your home like you deserve. You 
                        can schedule today by clicking Request Service. 
                    </p>
                </div>
                <div class='arrival'>
                    <h3>THE ARRIVAL</h3>
                    <p>
                    Mr. Handyman arrives at the scheduled appointment time in a clearly marked 
                    van with a variety of tools and supplies. You will be assigned a technician 
                    skilled in the work to be done. 
                    </p>
                </div>
                <div class='twork'>
                    <h3>THE WORK</h3>
                    <p>
                    We’re happy to work with whatever materials you supply – paint that you want 
                    to be used, kitchen tile or light bulbs that you have purchased. If there are 
                    additional materials needed for your job, there are a couple options: 
                    Have Mr. Handyman pick up the materials for you for an additional fee. 
                    </p>
                </div>
                <div class='payment'>
                    <h3>PAYMENT FOR WORK COMPLETED</h3>
                    <p>
                    Most often, services are billed based on project basis. The benefit you receive is 
                    that you only pay for the time required to complete the work. Payment is expected at 
                    the completion of work unless other arrangements have been made with the local business 
                    office. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Work;