import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        fname: "",
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
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to send the form data to a server or an email address
        console.log(formData);
      };

    return (
        <div className='form'>
            <header>
                <h1>Contact handyman</h1>
            </header>
            <div class='request'>
                <h2>Request Service</h2>
            </div>
            <div class='r-par'>
                <p>
                It doesn't matter if you're looking to remodel your Louisville home, 
                take care of some much-needed home maintenance, or address some repairs 
                inside of your home, we're here to help. Schedule your consultation today 
                so we can discuss your project!
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div class='name'>
                <label>
                    First Name: <br></br>
                    <input
                        type="text"
                        name="fname"
                        value={formData.Fname}
                        onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <label>
                    Last Name: <br></br>
                    <input
                        type="text"
                        name="lname"
                        value={formData.Lname}
                        onChange={handleChange}
                    /><br></br>
                </label><br></br>
                </div><br></br>
                
                <label>
                    Email: <br></br>
                    <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <label>
                    Phone Number <br></br>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <label>
                    Street Address <br></br>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <label>
                    City <br></br>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <label>
                    Zip Code <br></br>
                    <input
                        type="text"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <label>
                    State/Region <br></br>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <label>
                    Best time to Call: <br></br>
                    <input
                        type="text"
                        name="to_call"
                        value={formData.to_call}
                        onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <label>
                    How can we help you? <br></br>
                    <input 
                        type="checkbox" 
                        name="help" 
                        value="Home Remodeling" 
                        onChange={handleChange} />
                        Home Remodeling <br></br>
                    <input 
                        type="checkbox" 
                        name="help" 
                        value="Home Remodeling" 
                        onChange={handleChange} />
                        Handyman Work <br></br>
                </label><br></br>
                <label>Location</label>  <br></br>
                <select id="Locations" onChange={handleChange}>
                    <option value="" > Please select </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option5">Option 5</option>
                    <option value="option6">Option 6</option>
                    <option value="option7">Option 7</option>
                    <option value="option8">Option 8</option>
                    <option value="option9">Option 9</option>
                    <option value="option10">Option 10</option>
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
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    /><br></br>
                </label><br></br>
                <button type="submit">Send</button>
                </form>
        </div>
    )
}

export default Contact;