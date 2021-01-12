import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTickets } from '../../redux/mytickets/mytickets-actions';
import Spinner from '../reusable/loading-spinner';

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
        event.currentTarget.nextSibling.classList.toggle('hidden');
    }

    let ticketscontent;

    if (tickets_status_pending) {
        ticketscontent = <Spinner/>
    }
    else {
        if (tickets && tickets.length) {
            ticketscontent = tickets.map(ticket => {
                let statusColor = ticket.status === 'pending' ? 'bg-yellow-600' : ticket.status === 'solved' ? 'bg-green-600' 
                    : ticket.status === 'rejected' ? 'bg-red-600' : 'bg-custom-500';

                return <div className='underlined' key={ticket.id}>
                    <p className='py-4 text-xl font-medium' role='button' onClick={handleToggle}>
                        <span className={`mr-2 capitalize text-gray-200 px-2 py-1 rounded ${statusColor}`}>{ticket.status}</span>
                        # {ticket.id}
                    </p>
                    <div className='pb-3 pl-3 hidden'>
                        <p className="capitalize">
                            <span className="font-medium">Issue Type: </span> 
                            <span>{ticket.issue} Issue</span>
                        </p>
                        <p className="capitalize">
                            <span className="font-medium">Description: </span>
                            <span>{ticket.description}</span>
                        </p>
                    </div>
                </div>
            })
        }
        else {
            ticketscontent = <p>You don't have any tickets</p>
        }
    }

    return (
        <div>
            {ticketscontent}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);