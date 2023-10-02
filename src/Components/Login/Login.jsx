import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();

		if (username === "invo" && password === "invo") {
			toast.success("Login successful");
			setLoggedIn(true);
		} else {
			toast.error("Invalid username or password");
		}
	};

	if (loggedIn) {
		return <Navigate to="/" />;
	}

	return (
		<div className="wrap_login">
			<div className="logo_login">INVO</div>
			<div className="box_login">
				<div className="head_login">Login</div>

				<form className="form_login">
					<input
						className="text_login"
						type="text"
						placeholder="Type your email"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					></input>
					<input
						className="text_login"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>

					<button className="button_login" onClick={handleLogin}>
						Login
					</button>

					<p className="signup_login">
						New Here, Create an Account Instead{" "}
						<Link to={"/signup"} className="t_login">
							Signup
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
