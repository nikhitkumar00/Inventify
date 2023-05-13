import './Signup.css';
import React from "react";

const Signup = () => {
  return (
    <div className="wrapper_signup">
      <div className="logo_signup">INVO</div>
      <div className="container_signup">
        <div className="head_signup">Signup</div>
        <form>
          <input type="text" placeholder="Username"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Create Password"></input>
          <input type="password" placeholder="Confirm Password"></input>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <t>Login</t>
        </p>
      </div>
    </div>
  );
};

export default Signup;
