import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="wrapper_signup">
      <div className="logo_signup">INVO</div>
      <div className="container_signup">
        <div className="head_signup">Signup</div>
        <form className="SignUpForm">
          <input
            className="input_signup"
            type="text"
            placeholder="Username"
          ></input>
          <input
            className="input_signup"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="input_signup"
            type="password"
            placeholder="Create Password"
          ></input>
          <input
            className="input_signup"
            type="password"
            placeholder="Confirm Password"
          ></input>
          <Link to={"/"} className="button_signup">
            Sign Up
          </Link>
        </form>
        <p className="p_signup">
          Already have an account?{" "}
          <Link to={"/login"} className="t_signup">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
