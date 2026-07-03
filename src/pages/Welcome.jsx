import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate()
    const handleCreateAccount = () => {
        navigate('/sign-up')
    }
    const handleLoginAccount = () => {
        navigate('/sign-in')
    }
    return(
        <div className="main-container welcomepage">
           <div className="welcome-content">
            <h1>Welcome to PopX</h1>
            <p>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipisicing elit.
            </p>
            </div>  
            <div className="btns">
                <button onClick={handleCreateAccount} className="create-account-btn">Create Account</button>
                <button onClick={handleLoginAccount} className="already-account-btn">Already Registered? Login</button>
            </div>
        </div>

    )
}

export default Welcome;