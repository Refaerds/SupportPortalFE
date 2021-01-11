import React from 'react';

const ContentBox = ({ left, right }) => {
    return (
        <div className='row'>
            <div className='col-md-4 pt-5 pr-5 pl-5 pb-3'>{left}</div>
            <div className='col-md-8 pt-5 pr-5 pl-5 pb-3'>{right}</div>
        </div>
    )
}

export default ContentBox;