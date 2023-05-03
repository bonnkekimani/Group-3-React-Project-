import React, { useState } from "react";

const SignUpform = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div classname="cover">
        

      <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div class="media-options">
                    <a href="#" class="field google">
                        <span>Login with Google</span>
                    </a>
                </div>








        <form>

          <h1>THE HANDLERS</h1>
          <input type="text" className="log" placeholder="username" />
          <input type="password" className="log" placeholder="password" />
          <input type="text" className=" log" placeholder="email address" />


          
        {isLoggedIn ? (
          <div>
            <script src="Home.js"></script>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Please Login</h1>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
        </form>
      </div>
      <div>
        
      </div>
    </div>
  );
};
export default SignUpform;

