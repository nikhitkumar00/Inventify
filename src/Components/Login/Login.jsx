import React from "react";
import "./Login.css";

const Login = () =>(
    <div><div className="logo">
        INVO
    </div><div className="logbox">
            <div className="form">
                <form>
                    <div className="head">Login</div>
                    <div className="email">
                        <input type="text" name="" placeholder="Type your email"></input>
                        </div>
                    <div className="password">
                        <input type="password" name="" placeholder="Password"></input>
                    </div>
                    <input type="submit" value="Login"></input>
                    </form>
                    New Here, Create an Account Instead  Sign Up
            </div>
        </div>
    </div>
 );
 export default Login;