import React from 'react';

function About() {
    return (
        <div className='about'>
            <header>
                <h1>ABOUT US</h1>
                <h2>The Safe, Guaranteed Solution to Your Home Repair and <br></br>Maintenance Needs</h2>
            </header>
            <div class='container'>
                <div class="image">
                    <img src="https://images.unsplash.com/photo-1607400201515-c2c41c07d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMHJlcGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="repair"></img>
                </div>
                <div class='side-to-side'>
                    <div>
                    <p>Mr. Handyman is your one-call solution for a wide range of home maintenance and repair 
                        needs. Our uniformed technicians are fully insured professionals. We arrive on time in u
                        niform and a marked van with the tools to complete the job right.
                        </p>
                        <p>
                        Mr. Handyman technicians 
                        are highly skilled craftsmen with an average of 10 years’ experience in the trades. We’re 
                        home repair and improvement experts, and we are known for the quality of our workmanship 
                        and professional reliability so you know the job will be done correctly and efficiently.
                        </p>
                        <p>
                        Mr. Handyman, a Neighborly company, was founded in 1996, became a part of the Service 
                        Brands International (SBI) home services offerings, and in 2015 was acquired by Neighborly, 
                        the largest home franchisor in the world. In that time, Mr. Handyman has served nearly 1 
                        million customers across North America.
                        </p>
                    </div>
                </div>
            </div>
            <p>
            Here are a few reasons why our customers recommend Mr. Handyman to their friends.
            </p>
            <ul>
                <li>
                One simple call provides easy scheduling
                </li>
                <li>
                On time arrival
                </li>
                <li>
                Job is done right the first time
                </li>
                <li>
                Wide variety of repair, maintenance and improvements services
                </li>
                <li>
                Technicians have an average of 10 years’ experience in the trades and are fully insured for your safety
                </li>
                <li>
                We promise to clean up when we’re done
                </li>
            </ul>
        </div>
    )
}

export default About;