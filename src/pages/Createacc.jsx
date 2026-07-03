import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const CreateAccount = () => {
    const navigate = useNavigate();
    const handleAcc= () => {
            navigate = ("/AccountSetting")
    }
    const [values, setValues] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: 'no',
    });

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setValues((v) => ({ ...v, [field]: value }));
    };

    const isValid = useMemo(() => {
        return (
            values.fullName.trim() !== '' &&
            values.phone.trim() !== '' &&
            values.email.trim() !== '' &&
            values.password.trim() !== '' &&
            (values.agency === 'yes' || values.agency === 'no')
        );
    }, [values]);

    const handleSubmit = () => {
        if (!isValid) return;
        navigate('/Login');
    };

    return (
        <div className="main-container">
            <h1 style={{fontSize: '24px', fontWeight: 700}}>Create your <br />PopX account</h1>
            <div className="details">
                <div className="detail1">
                    <CustomInput label="Full Name" required value={values.fullName} onChange={handleChange('fullName')} />

                    <CustomInput label="Phone number" type="tel" required value={values.phone} onChange={handleChange('phone')} />

                    <CustomInput label="Email address" type="email" required value={values.email} onChange={handleChange('email')} />

                    <CustomInput label="Password" type="password" required placeholder="Enter a strong password" value={values.password} onChange={handleChange('password')} />

                    <CustomInput label="Company name" value={values.company} onChange={handleChange('company')} />
                </div>
                <div className="detail2"> 
                    <p style={{marginTop: 16}}>Are you an Agency?<span style={{color: '#d32f2f'}}>*</span></p>
                    <FormControl>
                        <RadioGroup
                            value={values.agency}
                            onChange={(e) => setValues((v) => ({ ...v, agency: e.target.value }))}
                            name="radio-buttons-group"
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>

            <div className="bottom-btn">
                <button onClick = {handleAcc}
                className="create-account-btn" style={{ width: '100%', height: 46 }} disabled={!isValid} onClick={handleSubmit}>
                    Create new account
                </button>
            </div>
        </div>
    )
}

export default CreateAccount;