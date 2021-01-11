import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTickets } from '../../redux/mytickets/mytickets-actions';

const mapStateToProps = (state) => ({
    tickets: state.mytickets.tickets,
    tickets_status_pending: state.mytickets.tickets_status_pending
})

const mapDispatchToProps = (dispatch) => ({
    getTickets: () => dispatch(getTickets())
})

const MyTickets = ({ tickets, tickets_status_pending, getTickets }) => {

    useEffect(() => {
        getTickets()
    }, [])

    const handleToggle = (event) => {
        event.currentTarget.nextSibling.classList.toggle('d-none');
    }

    let ticketsList = null;

    if (tickets_status_pending) {
        ticketsList = 
        <div className="text-center pt-4">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    else {
        if (tickets && tickets.length) {
            ticketsList = tickets.map(ticket => {
                return <div className='underlined' key={ticket.id}>
                    <p className='ticket-header p-3' role='button' onClick={handleToggle}>
                        <span className='ticket-status mr-2 text-capitalize'>{ticket.status}</span>
                        #{ticket.id}
                    </p>
                    <div className='d-none pb-3 pl-3'>
                        <p className="text-capitalize">Issue Type: {ticket.issue} Issue</p>
                        <p>Description: {ticket.description}</p>
                    </div>
                </div>
            })
        }
        else {
            ticketsList = <p>You don't have any tickets</p>
        }
    }

    return (
        <div className='text-left'>
            {ticketsList}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);