import React from 'react';

const Spinner = () => {
    
    return (
        <div className="w-full h-full block">
            <span className="text-center mt-6 text-white-500 opacity-50 my-0 mx-auto block">
                <i className="fas fa-circle-notch fa-spin fa-3x"></i>
            </span>
        </div>
    )
}

export default Spinner;