import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux/user/user-actions';
import PersonalDataForm from '../reusable/personalDataForm';

const mapDispatchToProps = (dispatch) => ({
    signUp: user => dispatch(signUp(user)),
})

const SignUp = ({ signUp }) => {
    return (
        <div className='w-full sm:w-2/3 lg:w-1/2 mx-auto'>
            <PersonalDataForm
                header='Sign up'
                route='signup'
                submitText='Sign up'
                onSubmit={signUp}
            />
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SignUp);