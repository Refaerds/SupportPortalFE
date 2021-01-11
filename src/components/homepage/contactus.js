import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/page/page-actions';
import { submitticketURL } from '../../urls';

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

    useEffect(() => {
        setName(currentUser.name === undefined ? '' : currentUser.name);
        setEmail(currentUser.email === undefined ? '' : currentUser.email);
    }, [currentUser])

    const clearForm = () => {
        setName(currentUser.name === undefined ? '' : currentUser.name);
        setEmail(currentUser.email === undefined ? '' : currentUser.email);
        setIssue('');
        setDescription('');
    }

    const handleSubmit = () => {
        const form = document.getElementById('contact-us');
        if (form.checkValidity()) {
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
                    form.classList.remove('was-validated');
                    setAlert('success', `Your ticket #${response} has been submitted`)
                }
            })
            .catch(err => {
                setAlert('error', "Unable to submit, please try again later or contact site support")
            })
        }
        else {
            form.classList.add('was-validated')
        }
    }

    return (
        <div className='text-left'>
            <div className='underlined'>
                <h4>Contact Us:</h4>
            </div>
            <form name='contact-us' id='contact-us' className='needs-validation' noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your name" 
                        id="name" 
                        required
                        readOnly={currentUser.name === undefined ? false : true}
                        value={name}
                        onChange={event => { setName(event.target.value) }}>
                    </input>
                    <div className="invalid-feedback">
                        Please enter your name
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        id="email" 
                        required
                        readOnly={currentUser.email === undefined ? false : true}
                        value={email}
                        onChange={event => { setEmail(event.target.value) }}>
                    </input>
                    <div className="invalid-feedback">
                        Please enter a valid email
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="issue">Issue Type:</label>
                    <select 
                        className="form-control" 
                        id="issue" 
                        required 
                        onChange={event => { setIssue(event.target.value) }} 
                        value={issue}
                    >
                        <option value='' disabled>-</option>
                        <option value='purchase'>Purchase Issue</option>
                        <option value='gameplay'>Gameplay Issue</option>
                        <option value='technical'>Technical Issue</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select one option
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Description:</label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        placeholder="Describe your problem" 
                        id="description" 
                        required
                        value={description}
                        onChange={event => { setDescription(event.target.value) }}>
                    </textarea>
                    <div className="invalid-feedback">
                        Please describe your problem
                    </div>
                </div>
                <button type="button" className="btn shadow" onClick={handleSubmit}>Send</button>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);