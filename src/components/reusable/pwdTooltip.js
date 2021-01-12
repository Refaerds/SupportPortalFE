import React from 'react';

const PwdTooltip = () => {

    const toggleTooltip = (event) => {
        const tooltip = event.currentTarget.nextSibling;
        let tooltipClassList = tooltip.classList;

        if (tooltipClassList.contains('opacity-0')) {
            tooltipClassList.remove('opacity-0');
            tooltipClassList.add('opacity-100')
            setTimeout(() => {
                tooltipClassList.remove('opacity-100');
                tooltipClassList.add('opacity-0');
            }, 10000)
        }
        else {
            tooltipClassList.remove('opacity-100');
            tooltipClassList.add('opacity-0');
        }

        tooltip.setAttribute('class', tooltipClassList)
    }

    return (
        <div className="relative inline-block ml-2">
            <i className="fas fa-question-circle text-gray-500" role="button" onClick={toggleTooltip}></i>
            <div className='absolute top-0 left-6 z-10 w-48 text-xs italic bg-gray-300 border border-gray-400 rounded p-1 transition-all duration-500 ease-in-out opacity-0'>
                Password should contain more than 3 characters, and must include at least one digit, lower-case letter and upper-case letter
            </div>
        </div>
    )
}

export default PwdTooltip;