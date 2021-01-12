import React from 'react';

const ContentBox = ({ left, right }) => {
    return (
        <div className='flex flex-wrap'>
            <div className='w-full md:w-5/12 lg:w-1/3 pr-0 md:pr-5 py-5'>{left}</div>
            <div className='w-full md:w-7/12 lg:w-2/3 pl-0 md:pl-5 py-5'>{right}</div>
        </div>
    )
}

export default ContentBox;