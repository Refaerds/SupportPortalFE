import React from 'react';
import { connect } from 'react-redux';
import { resetAlert } from '../../redux/page/page-actions';

const mapStateToProps = (state) => ({
    alertMessage: state.page.alertMessage,
    alertType: state.page.alertType
})

const mapDispatchToProps = (dispatch) => ({
    resetAlert: () => dispatch(resetAlert())
})

const Alert = ({alertMessage, alertType, resetAlert}) => {
    let alert;

    if (alertType === 'error') {
        alert = <div className="alert alert-danger alert-dismissible fade show text-center">
            <button type="button" className="close" data-dismiss="alert" onClick={resetAlert}>&times;</button>
            <b>Error! </b>{alertMessage}
        </div>
    }
    else if (alertType === 'success') {
        alert = <div className="alert alert-success alert-dismissible fade show text-center">
            <button type="button" className="close" data-dismiss="alert" onClick={resetAlert}>&times;</button>
            {alertMessage}
        </div>
    }
    else {
        alert = null
    }
    
    return (
        <div>
            {alert}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);