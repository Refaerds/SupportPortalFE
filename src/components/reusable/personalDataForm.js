import React, { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const PersonalDataForm = ({ currentUser, header, submitText, route, onSubmit }) => {
    const [ name, setName ] = useState(currentUser.name === undefined ? '' : currentUser.name);
    const [ email, setEmail ] = useState(currentUser.email === undefined ? '' : currentUser.email);
    const [ pwd, setPwd ] = useState('');
    const [ new_pwd, setNewPwd ] = useState('');

    const handleSubmit = () => {
        const form = document.getElementById('personal-data-form');
        if (form.checkValidity()) {
            onSubmit({name, email, pwd, new_pwd});
        }
        form.classList.add('was-validated'); 
    }

    const nameField = route === 'signin' ? null 
        : <div className='form-group'>
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your name" 
                value={name}
                id="name" 
                required
                onChange={(event) => {setName(event.target.value)}}>
            </input>
            <div className="invalid-feedback">
                Please enter your name
            </div>
        </div>;

    const newPwdField = route === 'myaccount' 
        ? <div className="form-group">
            <label htmlFor="new_pwd">New Password:</label>
            <input 
                type="password" 
                className="form-control" 
                placeholder="Enter a new password or leave blank to keep the old one" 
                id="new_pwd"
                onChange={(event) => {setNewPwd(event.target.value)}}>
            </input>
            <div className="invalid-feedback">
                Please enter a new password
            </div>
        </div>
        : null;
    
    return (
        <div className='text-left'>
            <div className='underlined'>
                <h4>{header}:</h4>
            </div>
            <form name='personal-data-form' id='personal-data-form' className='needs-validation' noValidate>
                {nameField}
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={email}
                        id="email"
                        required
                        onChange={(event) => {setEmail(event.target.value)}}>
                    </input>
                    <div className="invalid-feedback">
                        Please enter a valid email address
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter your password" 
                        id="pwd" 
                        required
                        onChange={(event) => {setPwd(event.target.value)}}>
                    </input>
                    <div className="invalid-feedback">
                        Please enter a password
                    </div>
                </div>
                {newPwdField}
                <button type="button" className="btn shadow" onClick={handleSubmit}>{submitText}</button>
            </form>
        </div>
    )
}

export default connect(mapStateToProps)(PersonalDataForm);