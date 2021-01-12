import React from 'react';

const FormElement = ({ children, validated }) => {

    let invalid_input_i_class = 'hidden';

    if (validated === 'invalid') {
        invalid_input_i_class = '';
    }

    return (
        <div className="mb-3">
            {children[0]}
            <div className="relative">
                {children[1]}
                <i className={`fas fa-exclamation-circle invalid-input ${invalid_input_i_class}`}></i>
            </div>
        </div>
    )
}

export default FormElement;