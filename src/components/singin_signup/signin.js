import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/user/user-actions';
import PersonalDataForm from '../reusable/personalDataForm';

const mapDispatchToProps = (dispatch) => ({
    signIn: user => dispatch(signIn(user))
})

const SignIn = ({ signIn }) => {

    return (
        <div className='text-left p-5 row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <PersonalDataForm
                    header='Sign in'
                    route='signin'
                    submitText='Sign in'
                    onSubmit={signIn}
                />
            </div>
            <div className='col-md-3'></div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SignIn);