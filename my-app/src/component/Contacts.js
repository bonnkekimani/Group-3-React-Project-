import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState([]);
    const [newformData, setnewFormData] = useState({
        fname: '',
        lname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip_code: "",
        state: "",
        to_call: "",
        Help_you: "",
        Location: "",
        start_project: "",
        referral: "",
        Comments: "",
        message: ""
    });
    
    const handleChange = (event) => {
        setnewFormData({
          ...newformData,
          [event.target.name]: event.target.value
        });
      }
    
      function handleSubmit (e) {
        e.preventDefault();
        setFormData([...formData, newformData]);
        setnewFormData({
            fname: '',
            lname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            zip_code: "",
            state: "",
            to_call: "",
            help_you: "",
            location: "",
            start_project: "",
            referral: "",
            comments: "",
            message: ""
        });
      };

    return (
        <div className='contact'>
                <div class='contact-header'>
                    <header>
                        <h1>Contact handyman</h1>
                    </header>
                </div>
            <div class='request'>
                <h2>Request Service</h2>
            </div>
            <div class='r-par'>
                <p>
                It doesn't matter if you're looking to remodel your home, 
                take care of some much-needed home maintenance, or address some repairs 
                inside of your home, we're here 
                </p>
            </div>
            <div class='l-par'>
                <p>
                to help. Schedule your consultation today 
                so we can discuss your project!
                </p>
            </div>
            <br></br>
            <div class='greetings'>
                <header>
                Get in touch today!
                </header>
            </div><br></br>
            <div class='form-container'>
                <form onSubmit={handleSubmit}>
                    <div class='name'>
                        <label>
                            First Name: <br></br>
                            <input
                                type="text"
                                name="fname"
                                value={newformData.fname}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            Last Name: <br></br>
                            <input
                                type="text"
                                name="lname"
                                value={newformData.lname}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        </div><br></br>
                        
                        <label>
                            Email: <br></br>
                            <input
                            type="text"
                            name="email"
                            value={newformData.email}
                            onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            Phone Number <br></br>
                            <input
                                type="tel"
                                name="phone"
                                value={newformData.phone}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            Street Address <br></br>
                            <input
                                type="text"
                                name="address"
                                value={newformData.address}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            City <br></br>
                            <input
                                type="text"
                                name="city"
                                value={newformData.city}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            Zip Code <br></br>
                            <input
                                type="text"
                                name="zip_code"
                                value={newformData.zip_code}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            State/Region <br></br>
                            <input
                                type="text"
                                name="state"
                                value={newformData.state}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            Best time to Call: <br></br>
                            <input
                                type="text"
                                name="to_call"
                                value={newformData.to_call}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            How can we help you? <br></br>
                            <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={newformData.help_you}
                                onChange={handleChange} />
                                Home Remodeling <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={newformData.help_you} 
                                onChange={handleChange} />
                                Handyman Work <br></br>
                        </label><br></br>
                        <label>Location</label>  <br></br>
                        <select id="Locations" onChange={handleChange}>
                            <option value="" >Please select </option>
                            <option value={newformData.location}>Nairobi, KEN</option>
                            <option value={newformData.location}>Mombasa, KEN</option>
                            <option value={newformData.location}>Nakuru, KEN</option>
                            <option value={newformData.location}>Kisumu, KEN</option>
                            <option value={newformData.location}>Nyeri, KEN</option>
                            <option value={newformData.location}>Garissa, KEN</option>
                            <option value={newformData.location}>Machakos, KEN</option>
                            <option value={newformData.location}></option>
                        </select><br></br>
                        <br></br>
                        <label>How Soon Would You Like to Start Your Project</label>  <br></br>
                        <select id="time" onChange={handleChange}>
                            <option value="" > Please select </option>
                            <option value="option1">Now</option>
                            <option value="option2">Next couple of weeks</option>
                            <option value="option3">1-2 Months</option>
                            <option value="option4">3-6 Months</option>
                            <option value="option5">6-9 Months</option>
                            <option value="option6">9-12 Months</option>
                            <option value="option7">Not Sure</option>
                        </select><br></br>
                        <br></br>
                        <label> How did you Hear about Mr. Handyman? </label>  <br></br>
                        <select id="Referrals" onChange={handleChange}>
                            <option value="" > Please select </option>
                            <option value="option1">Repeat Customer</option>
                            <option value="option2">Google</option>
                            <option value="option3">Web</option>
                            <option value="option4">Facebook</option>
                            <option value="option5">Referral-Customer</option>
                            <option value="option6">Referral-Friend</option>
                            <option value="option7">Referral-Neighbor</option>
                            <option value="option8">Instagram</option>
                            <option value="option9">Other</option>
                            <option value="option10">Referral-Contractors/Subs</option>
                            <option value="option11">Referral-Engineer/Architect</option>
                        </select><br></br>
                        <br></br>
                        <label>
                            Questions/Comments about your project: <br></br>
                            <br></br>
                            <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <button type="submit" onClick="alert('Hello World!')">Send</button>
                    </form>
                </div>
        </div>
    )
}

export default Contact;