import React, { useState, useEffect } from 'react';
import Button from '../reusable/button';
import FormElement from '../reusable/form-element';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/page/page-actions';
import { submitticketURL } from '../../urls';
import { validateName, validateEmail, validateIssue, validateDescription } from '../../utils/validations';

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setAlert: (alertType, value) => dispatch(setAlert(alertType, value)),
})

const ContactUs = ({ currentUser, setAlert }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [issue, setIssue] = useState('');
    const [description, setDescription] = useState('');
    const [nameValid, setNameValid] = useState('');
    const [emailValid, setEmailValid] = useState('');
    const [issueValid, setIssueValid] = useState('');
    const [descriptionValid, setDescriptionValid] = useState('');

    useEffect(() => {
        setName(currentUser.name === undefined ? '' : currentUser.name);
        setEmail(currentUser.email === undefined ? '' : currentUser.email);
    }, [currentUser])

    const clearForm = () => {
        setName(currentUser.name === undefined ? '' : currentUser.name);
        setEmail(currentUser.email === undefined ? '' : currentUser.email);
        setIssue('');
        setDescription('');
        setNameValid('');
        setEmailValid('');
        setIssueValid('');
        setDescriptionValid('');
    }

    const handleSubmit = () => {
        if (validateAllInputs(name, email, issue, description)) {
            fetch(submitticketURL, {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    issue: issue,
                    description: description
                })
            })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    setAlert('error', response.message)
                }
                else {
                    clearForm();
                    setAlert('success', `Thank you! Ticket #${response} has been submitted`)
                }
            })
            .catch(err => {
                setAlert('error', "Unable to submit, please try again later or contact site support")
            })
        }
    }

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

    const validateIssueInput = (issue) => {

        const validated = validateIssue(issue);

        if (!validated) {
            setIssueValid('invalid')
        }
        else {
            setIssueValid('valid')
        }
        return validated;
    }

    const validateDescriptionInput = (description) => {

        const validated = validateDescription(description);

        if (!validated) {
            setDescriptionValid('invalid')
        }
        else {
            setDescriptionValid('valid')
        }

        return validated;
    }

    const validateAllInputs = (name, email, issue, description) => {
        const nameIsValid = validateNameInput(name);
        const emailIsValid = validateEmailInput(email);
        const issueIsValid = validateIssueInput(issue);
        const descriptionIsValid = validateDescriptionInput(description);

        return nameIsValid && emailIsValid && issueIsValid && descriptionIsValid;
    }

    return (
        <div>
            <div className='underlined mb-3'>
                <h4>Contact Us:</h4>
            </div>

            <form name='contact-us' id='contact-us' noValidate>

                <FormElement validated={nameValid}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        id="name" 
                        required
                        readOnly={currentUser.name === undefined ? false : true}
                        value={name}
                        onChange={event => { setName(event.target.value) }}
                        onBlur={event => {if (event.target.value) validateNameInput(event.target.value)}}>
                    </input>
                </FormElement>

                <FormElement validated={emailValid}>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email" 
                        placeholder="Enter email" 
                        id="email" 
                        required
                        readOnly={currentUser.email === undefined ? false : true}
                        value={email}
                        onChange={event => { setEmail(event.target.value) }}
                        onBlur={event => {if (event.target.value) validateEmailInput(event.target.value)}}>
                    </input>
                </FormElement>

                <FormElement validated={issueValid}>
                    <label htmlFor="issue">Issue Type:</label>
                    <select 
                        id="issue" 
                        required 
                        onChange={event => { setIssue(event.target.value) }} 
                        value={issue}
                        onBlur={event => {if (event.target.value) validateIssueInput(event.target.value)}}>
                        <option value='' disabled>-</option>
                        <option value='purchase'>Purchase Issue</option>
                        <option value='gameplay'>Gameplay Issue</option>
                        <option value='technical'>Technical Issue</option>
                    </select>
                </FormElement>
                
                <FormElement validated={descriptionValid}>
                    <label htmlFor="pwd">Description:</label>
                    <textarea 
                        type="text" 
                        placeholder="Describe your problem" 
                        id="description" 
                        required
                        value={description}
                        onChange={event => { setDescription(event.target.value) }}
                        onBlur={event => {if (event.target.value) validateDescriptionInput(event.target.value)}}>
                    </textarea>
                </FormElement>

                <Button onButtonClick={handleSubmit} text='Send'/>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);