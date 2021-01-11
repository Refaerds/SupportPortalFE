import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux/user/user-actions';
import PersonalDataForm from '../reusable/personalDataForm';

const mapDispatchToProps = (dispatch) => ({
    signUp: user => dispatch(signUp(user)),
})

const SignUp = ({ signUp }) => {
    return (
        <div className='text-left p-5 row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <PersonalDataForm
                    header='Sign up'
                    route='signup'
                    submitText='Sign up'
                    onSubmit={signUp}
                />
            </div>
            <div className='col-md-3'></div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SignUp);