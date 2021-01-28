import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import './Login.css';

function Register(props) {
    const {register, handleSubmit, errors} = useForm();
    const [validateError, setValidateError] = useState(null);
    const history = useHistory();

    const onSubmit = data => {
        fetch('http://localhost:9000/users/register', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()
        ).then(res => {
            if (res.error) {
                setValidateError(res.error)
            } else if (res.login) {
                props.login({login: res.login});
                sessionStorage.setItem('login', res.login);
                history.push('/')
            }
        }).catch(error => {
            console.log(`Error: ${error.toString()}`);
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="title">Registration</h1>
            <label htmlFor="login"><b>Login: </b></label>
            <input name="login" ref={register({required: true})}/>
            {errors.login && <div className="error">This field is required</div>}


            <label htmlFor="password"><b>Password: </b></label>
            <input type="password" name="password" ref={register({required: true})}/>
            {errors.password && <div className="error">This field is required</div>}
            {validateError && <div className="error validate-error">{validateError}</div>}

            <button type="submit">Register</button>
        </form>
    );
}

export default Register;