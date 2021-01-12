import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { resetAlert } from '../../redux/page/page-actions';

const mapStateToProps = (state) => ({
    alertMessage: state.page.alertMessage,
    alertType: state.page.alertType
})

const mapDispatchToProps = (dispatch) => ({
    resetAlert: () => dispatch(resetAlert())
})

const Alert = ({alertMessage, alertType, resetAlert }) => {

    const alertDiv = useRef(null);

    useEffect(() => {
        alertDiv.current.classList.remove('opacity-0');
        alertDiv.current.classList.add('opacity-90');

        const fadeOut = setTimeout(() => {
            if (alertDiv.current) {
                alertDiv.current.classList.remove('opacity-90');
                alertDiv.current.classList.add('opacity-0');
            }
        }, 7000)

        return () => {
            clearTimeout(fadeOut);
        }
    }, []);

    const createAlert = () => {
        let alertClass = `alert-${alertType}`;
        let alertPrependText = alertType === 'error' ? <b className="pr-2">Error!</b> : '';

        return (
            <div ref={alertDiv} className={`flex flex-no-wrap justify-between pl-3 py-3 rounded opacity-0 transition-all duration-500 ease-in-out fixed top-20 right-0 w-full md:w-1/2 lg: w-1/3 z-20 ${alertClass}`}>
                <div>
                    {alertPrependText}
                    {alertMessage}
                </div>
                <button type="button" className="text-current hover:text-current shadow-none py-0 bg-transparent" onClick={resetAlert}>&times;</button>
            </div>
        )
    }

    let alert = alertType ? createAlert() : null;
    
    return (
        <div>
            {alert}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);