import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFAQs } from '../../redux/faq/faq-actions';

const mapStateToProps = (state) => ({
    faqs: state.faq.faqs,
    faqs_status_pending: state.faq.faqs_status_pending
})

const mapDispatchToProps = (dispatch) => ({
    getFAQs: () => dispatch(getFAQs())
})

const Faq = ({ faqs, faqs_status_pending, getFAQs }) => {

    useEffect(() => {
        getFAQs()
    }, [])

    const handleToggle = (event) => {
        const span = event.currentTarget;

        span.nextSibling.classList.toggle('d-none');
        if (span.firstChild.innerHTML === "+") {
            span.firstChild.innerHTML = "&ndash;";
        } else {
            span.firstChild.innerHTML = "+";
        }
    }

    let faqslist = null;

    if (faqs_status_pending) {
        faqslist = 
        <div className="text-center pt-4">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    else {
        if (faqs && faqs.length) {
            faqslist = faqs.map(faq => {
                return <div className='underlined' key={faq.id}>
                    <h5 className='faq-header p-2' role='button' onClick={handleToggle}>
                        <span className='plus-minus'>+</span>
                        {faq.question}
                    </h5>
                    <div className='d-none p-2'>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            })
        }
        else {
            faqslist = <p>At the moment, we don't have any FAQs to share</p>
        }
    }
    
    return (
        <div className='text-left'>
            <div className='underlined'>
                <h4>FAQs:</h4>
            </div>
            {faqslist}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq);