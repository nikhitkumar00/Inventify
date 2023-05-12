import "./Signup.css";

const App = () => {
  return (
    <div className="App">
      <div className="xl">INVO</div>
      <div className="l">
        <div className="m">
          <div className="signup">Signup</div>
          <div className="s">
            <input type="text" placeholder="Username" size="35"></input>
          </div>
          <div className="s">
            <input type="email" placeholder="Email" size="35"></input>
          </div>
          <div className="s">
            <input
              type="password"
              placeholder="Create Password"
              size="35"
            ></input>
          </div>
          <div className="s">
            <input
              type="password"
              placeholder="Confirm Password"
              size="35"
            ></input>
          </div>
          <div className="s">
            <input class="b1" type="submit" value="Signup"></input>
          </div>
        </div>
        <div className="xs">
          <br></br>Already have an account? <h4>Login</h4>
        </div>
      </div>
    </div>
  );
}

export default App;