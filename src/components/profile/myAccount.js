import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/user/user-actions';
import PersonalDataForm from '../reusable/personalDataForm';

const mapDispatchToProps = (dispatch) => ({
    updateUser: (new_user) => dispatch(updateUser(new_user)) 
})

const MyAccount = ({ updateUser }) => {

    return (
        <PersonalDataForm
            route='myaccount'
            header='Update my personal information'
            submitText='Update'
            onSubmit={updateUser}
        />
    )
}

export default connect(null, mapDispatchToProps)(MyAccount);