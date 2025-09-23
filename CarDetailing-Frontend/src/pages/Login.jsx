import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    const handleLogin = () => {
        // Perform login logic here
        // On successful login, navigate to the customer profile page
        navigate("/");
    };

    return (
        <div>
            <h2>Login Page</h2>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
