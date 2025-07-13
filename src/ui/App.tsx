
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store, type RootState } from '../core/redux/store';
import { TicketCard } from './dumbs/TicketCard'
import { SideBar } from './smarts/SideBar'
import { initialDummyData, selectTicket } from '../core/redux/ticketSlice';
import './App.css'
import { TicketDetails } from './dumbs/TicketDetails';

function App() {

  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');

  const filteredTickets = tickets.filter(ticket => {
    if (filter === 'all') return true;
    return ticket.status === filter;
  });

  const selectedTicketId = useSelector((state: RootState) => state.tickets.selectedTicketId);
  const selectedTicket = tickets.find(t => t.id === selectedTicketId);

  useEffect(() => {
    if (tickets.length === 0) {
      store.dispatch(initialDummyData());
    }
  }, [tickets.length]);

  useEffect(() => {
    store.dispatch(selectTicket(null));
  }, [filter]);


  return (
    <>
      <div className="w-full h-full flex gap-4">
        <SideBar selected={filter} onSelect={setFilter} />
        <section className="flex flex-col w-1/3 p-4 overflow-y-auto gap-5">
          {
            filteredTickets.map(ticket => (
              <TicketCard
                selected={selectedTicket?.id === ticket.id}
                onSelect={() => dispatch(selectTicket(ticket.id))}
                key={ticket.id}
                ticket={ticket} />
            )
            )}
        </section>
        <TicketDetails ticket={selectedTicket ? selectedTicket : null} />
      </div>
    </>
  )
}

export default App
