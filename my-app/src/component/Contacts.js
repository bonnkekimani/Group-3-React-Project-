import React, { useState } from 'react';

function Contacts() {
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
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
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
    }
    
      function handleSubmit (e) {
        e.preventDefault();
        if (setFormData.length > 0)  {
            setFormData({
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
            setErrors([]);
        } else {
            setErrors(["Please fill out all fields"]);
        }
        e.target.reset();
        
        
      };

      function Button() {
        const handleClick = () => {
          alert("Your inquiry has been submitted");
        };
      
        return <button type="submit" onClick={handleClick}>SEND</button>;
      }

    return (
        <div className='contact'>
                <div class='contact-header'>
                    <header>
                        <h1>Contact handyman</h1>
                    </header>
                </div>
            <div class='request'>
                <h2>Request Service</h2>
            </div><br></br>
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
                                value={formData.fname}
                                onChange={handleChange}
                            /><br></br>
                        </label><br></br>
                        <label>
                            Last Name: <br></br>
                            <input
                                type="text"
                                name="lname"
                                value={formData.lname}
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
                            <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you}
                                onChange={handleChange} />
                                Assembly <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you}
                                onChange={handleChange} />
                                Carpentry <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you}
                                onChange={handleChange} />
                                Electrical <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you}
                                onChange={handleChange} />
                                Installation <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you}
                                onChange={handleChange} />
                                Maintenance <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you}
                                onChange={handleChange} />
                                Painting <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you}
                                onChange={handleChange} />
                                Plumbing <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you}
                                onChange={handleChange} />
                                Remodeling <br></br>
                            <input 
                                type="checkbox" 
                                name="help" 
                                value={formData.help_you} 
                                onChange={handleChange} />
                                Repair <br></br>
                        </label><br></br>
                        <label>Location</label>  <br></br>
                        <select id="Locations" value={formData.location} onChange={handleChange}>
                            <option value="" >Please select </option>
                            <option value="">Nairobi, KEN</option>
                            <option value="">Mombasa, KEN</option>
                            <option value="">Nakuru, KEN</option>
                            <option value="">Kisumu, KEN</option>
                            <option value="">Nyeri, KEN</option>
                            <option value="">Garissa, KEN</option>
                            <option value="">Machakos, KEN</option>
                        </select><br></br>
                        <br></br>
                        <label>How Soon Would You Like to Start Your Project</label>  <br></br>
                        <select id="time" value={formData.time} onChange={handleChange}>
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
                        <select id="Referrals" value={formData.referral} onChange={handleChange}>
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
                        <Button/>
                    </form>
                    {errors.length > 0
                    ? errors.map((error, index) => (
                    <p key={index} style={{ color: "red" }}>
                    {error}
                    </p>
                    ))
                    : null}
                    </div>
                </div>
    )
}

export default Contacts;