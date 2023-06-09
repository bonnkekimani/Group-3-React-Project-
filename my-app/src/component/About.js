import React from 'react';
import ImageSlider from './ImageSlider';
import Work from './Work';

function About() {
    const images = [
        
        "https://d217qqw9cv4mkx.cloudfront.net/sub/50098/images/blogs/Before-and-After-Hillsborough.1).jpg",
        "https://www.windowsandmoreinc.com/wp-content/uploads/2016/12/before-after-bay-bow-windows.jpg",
        "https://sublimegroup.com.au/wp-content/uploads/2018/02/Kitchens-Brisbane-Before-and-After-2-1635x581.jpg",
        "https://europaving.com/wp-content/grand-media/image/bafore_after_brick_driveway3.jpg",
      ];

    return (
        <div className='about'>

            <div class='tab'>
                {/* <header>
                    <div class='atitle'>
                        <h1>ABOUT US</h1>
                    </div>
                    <div class='asubtitle'>
                        <h2>The Safe, Guaranteed Solution to Your Home Repair and Maintenance Needs</h2>
                    </div>
                </header> */}
            </div><br></br>
            <div class='container'>
                <div class="image">
                    <img src="https://images.unsplash.com/photo-1607400201515-c2c41c07d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMHJlcGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="repair"></img>
                </div>
                <div class='side-to-side'>
                    <div className='kandoDiv'>
                    <div class='tab'>
                <header>
                    <div class='atitle'>
                        <h1><br/>ABOUT US<br/></h1>
                    </div>
                    <div class='asubtitle'>
                        <h2>The Safe, Guaranteed Solution to Your Home Repair and Maintenance Needs<br/><br/></h2>
                    </div>
                </header>
                </div>
                    <p>Mr. Handyman is your one-call solution for a wide range of home maintenance and repair 
                        needs. Our uniformed technicians are fully insured professionals. We arrive on time in 
                        uniform and a marked van with the tools to complete the job right.
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
                        million customers across Kenya.
                        </p>
                    </div>
                </div>
            </div><br></br>

            <br></br>
            <div className='gallery'>
                <h2>Gallery</h2>
            </div><br></br>
            <ImageSlider images={images} />
            <Work/>
        </div>
    )
}

export default About;