import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return(
  <div className="wrap_login">
    <div className="logo_login">INVO</div>
    <div className="box_login">
      <div className="head_login">Login</div>

      <form className="form_login">
        <input
          className="text_login"
          type="text"
          placeholder="Type your email"
                >
                    
        </input>
        <input
          className="text_login"
          type="password"
          placeholder="Password"
                >
                    
        </input>
      
        <Link to={"/"} className="button_login">Login</Link>
        
        
          <p className="signup_login">
            New Here, Create an Account Instead <Link to={"/signup"} className="t_login" >Signup</Link>
          </p></form>
        
    </div>
  </div>
);
};
export default Login;
