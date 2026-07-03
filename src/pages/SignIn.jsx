import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const SignIn = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({ email: '', password: '' })

    const handleChange = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }))

    const valid = useMemo(() => values.email.trim() !== '' && values.password.trim() !== '', [values])

    const handleLogin = () => {
        if (!valid) return
        navigate('/Login')
    }
    return (
        <div className="main-container signinpage">
            <div className="sign_in_content">
                <h1>Signin to your
                    <br />
                    PopX account
                </h1>
                <p>Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit,
                </p>
            </div>
            <div className="signInentry">
               <CustomInput
                    id="signin-email"
                    label="Email Address"
                    type='email'
                    value={values.email}
                    onChange={handleChange('email')}
                />
                <CustomInput
                    id="signin-password"
                    label="Password"
                    type='password'
                    value={values.password}
                    onChange={handleChange('password')}
                />

                <button onClick={handleLogin} disabled={!valid}>Login</button>
                
            </div>
        </div>
    )
}

export default SignIn;