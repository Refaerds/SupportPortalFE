import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormElement from '../reusable/form-element';
import Button from '../reusable/button';
import PwdTooltip from '../reusable/pwdTooltip';
import { validateName, validateEmail, validatePwd } from '../../utils/validations';

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const PersonalDataForm = ({ currentUser, header, submitText, route, onSubmit }) => {
    const [ name, setName ] = useState(currentUser.name === undefined ? '' : currentUser.name);
    const [ email, setEmail ] = useState(currentUser.email === undefined ? '' : currentUser.email);
    const [ pwd, setPwd ] = useState('');
    const [ new_pwd, setNewPwd ] = useState('');
    const [ nameValid, setNameValid ] = useState('');
    const [ emailValid, setEmailValid ] = useState('');
    const [ pwdValid, setPwdValid ] = useState('');
    const [ newPwdValid, setNewPwdValid ] = useState(''); 

    const validateNameInput = (name) => {

        const validated = validateName(name);

        if (!validated) {
            setNameValid('invalid')
        }
        else {
            setNameValid('valid')
        }
        return validated;
    }

    const validateEmailInput = (email) => {

        const validated = validateEmail(email);

        if (!validated) {
            setEmailValid('invalid')
        }
        else {
            setEmailValid('valid')
        }
        return validated;
    }

    const validatePwdInput = (pwd) => {

        const validated = validatePwd(pwd);

        if (!validated) {
            setPwdValid('invalid')
        }
        else {
            setPwdValid('valid')
        }
        return validated;
    }

    const validateNewPwdInput = (pwd) => {

        const validated = validatePwd(pwd);

        if (!validated) {
            setNewPwdValid('invalid')
        }
        else {
            setNewPwdValid('valid')
        }
        return validated;
    }

    const validateAllInputs = () => {
        const nameIsValid = nameField === null ? true : validateNameInput(name);
        const emailIsValid = validateEmailInput(email);
        const pwdIsValid = validatePwdInput(pwd);
        const newPwdIsValid = newPwdField === null ? true : validateNewPwdInput(new_pwd);

        return nameIsValid && emailIsValid && pwdIsValid && newPwdIsValid;
    }

    const handleSubmit = () => {
        if (validateAllInputs()) {
            onSubmit({name, email, pwd, new_pwd});
        }
    }

    const handleEnterKeyPress = (event) => {
        if (event.charCode === 13) {
            handleSubmit()
        }
    }

    const nameField = route === 'signin' ? null : 
        <FormElement validated={nameValid}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                id="name" 
                required
                onChange={event => {setName(event.target.value)}}
                onBlur={event => {if (event.target.value) validateNameInput(event.target.value)}}>
            </input>
        </FormElement>;

    const newPwdField = route === 'myaccount' ? 
        <FormElement validated={newPwdValid}>
            <label htmlFor="new_pwd">
                New Password:
                <PwdTooltip/>
            </label>
            <input 
                type="password" 
                placeholder="Enter a new password or leave blank to keep the old one" 
                id="new_pwd"
                onChange={event => {setNewPwd(event.target.value)}}
                onBlur={event => {if (event.target.value) validateNewPwdInput(event.target.value)}}>
            </input>
        </FormElement>
        : null;
    
    return (
        <div>
            <div className='underlined mb-3'>
                <h4>{header}:</h4>
            </div>
            <form name='personal-data-form' id='personal-data-form' noValidate>

                {nameField}

                <FormElement validated={emailValid}>
                    <label htmlFor="email">Email address:</label>
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        id="email"
                        required
                        onChange={event => {setEmail(event.target.value)}}
                        onBlur={event => {if (event.target.value) validateEmailInput(event.target.value)}}>
                    </input>
                </FormElement>

                <FormElement validated={pwdValid}>
                    <label htmlFor="pwd">
                        Password:
                        <PwdTooltip/>
                    </label>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        id="pwd" 
                        required
                        onChange={event => {setPwd(event.target.value)}}
                        onBlur={event => {if (event.target.value) validatePwdInput(event.target.value)}}
                        onKeyPress={handleEnterKeyPress}>
                    </input>
                </FormElement>

                {newPwdField}

                <Button onButtonClick={handleSubmit} text={submitText}/>
            </form>
        </div>
    )
}

export default connect(mapStateToProps)(PersonalDataForm);