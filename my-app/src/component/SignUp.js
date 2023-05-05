import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";

const SignUpform = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
      <div classname="cover">
        
        
        <div className="sign-form">
        <form>
            
            <h2>THE HANDLERS</h2>
            <input type="text" className="log" placeholder="username" />
            <input type="password" className="log" placeholder="password" />
            <input type="text" className=" log" placeholder="email address" />
            {isLoggedIn ? (
        <div>
            <script src="Home.js"></script>
            <button onClick={handleLogout}>Logout</button>
        </div>
        ) : (
        <div className="login-font">
            <h1>Please Login</h1>
            {/* <button onClick={handleLogin}>Login</button> */}


            <div>
                      <Link to="/Home">
                          <button id ='BtnService'>Login</button> 
                      </Link>

                         <Routes>
                               <Route path="/Home" element={<Home />} />
                         </Routes>
            </div>



            <div class="media-options">
            <a href="https://www.facebook.com/" target="_blank" class="field facebook">
                <i class='bx bxl-facebook facebook-icon'></i>
                <span>Login with Facebook</span>
            </a>
        </div>
            <div class="media-options">
             <a href="https://shorturl.at/iCFS1" target="_blank" class="field google">
                 <span>Login with Gmail</span>
            </a>
        </div>
          </div>
        )}
        </form>
        </div>
    </div>
  );
};
export default SignUpform;

