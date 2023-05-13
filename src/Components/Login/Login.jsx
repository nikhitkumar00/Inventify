import "./Login.css";

const Login = () => (
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
        <button className="button_login" type="submit">Login</button>
        <div className="signup_login">
          <p>
            New Here, Create an Account Instead <a>Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  </div>
);
export default Login;
