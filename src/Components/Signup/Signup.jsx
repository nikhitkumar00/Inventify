import './Signup.css';


const Signup = () => {
  return (
    <div className="wrapper_signup">
      <div className="logo_signup">INVO</div>
      <div className="container_signup">
        <div className="head_signup">Signup</div>
        <form >
          <input className="input_signup" type="text" placeholder="Username"></input>
          <input className="input_signup" type="email" placeholder="Email"></input>
          <input className="input_signup" type="password" placeholder="Create Password"></input>
          <input className="input_signup" type="password" placeholder="Confirm Password"></input>
          <button className="button_signup" type="submit">Sign Up</button>
        </form>
        <p className='p_signup'>
          Already have an account? <t className="t_signup">Login</t>
        </p>
      </div>
    </div>
  );
};

export default Signup;
