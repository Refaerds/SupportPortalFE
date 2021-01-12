import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/user/user-actions';
import PersonalDataForm from '../reusable/personalDataForm';

const mapDispatchToProps = (dispatch) => ({
    signIn: user => dispatch(signIn(user))
})

const SignIn = ({ signIn }) => {

    return (
        <div className='w-full sm:w-2/3 lg:w-1/2 mx-auto'>
            <PersonalDataForm
                header='Sign in'
                route='signin'
                submitText='Sign in'
                onSubmit={signIn}
            />
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SignIn);