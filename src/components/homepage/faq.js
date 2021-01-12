import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFAQs } from '../../redux/faq/faq-actions';
import Spinner from '../reusable/loading-spinner';

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

        span.nextSibling.classList.toggle('hidden');
        if (span.firstChild.innerHTML === "+") {
            span.firstChild.innerHTML = "&ndash;";
        } else {
            span.firstChild.innerHTML = "+";
        }
    }

    let faqscontent;

    if (faqs_status_pending) {
        faqscontent = <Spinner/>
    }
    else {
        if (faqs && faqs.length) {
            faqscontent = faqs.map(faq => {
                return <div className='underlined' key={faq.id}>
                    <h5 role='button' onClick={handleToggle}>
                        <span className='w-6 inline-block font-bold'>+</span>
                        {faq.question}
                    </h5>
                    <div className='hidden pt-2 pb-6'>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            })
        }
        else {
            faqscontent = <p>At the moment, we don't have any FAQs to share</p>
        }
    }
    
    return (
        <div>
            <div className='underlined'>
                <h4>FAQs:</h4>
            </div>
            {faqscontent}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq);