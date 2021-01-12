import React from 'react';

const Button = ({ onButtonClick, text }) => {

    return (
        <button type='button' onClick={onButtonClick}>
            {text}
        </button>
    )
}

export default Button;