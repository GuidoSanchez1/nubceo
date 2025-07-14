
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store, type RootState } from '../core/redux/store';
import { TicketCard } from './dumbs/TicketCard'
import { SideBar } from './smarts/SideBar'
import { initialDummyData, selectTicket } from '../core/redux/ticketSlice';
import './App.css'
import { TicketDetails } from './smarts/TicketDetails';
import { NewTicketForm } from './smarts/NewTicketForm';

function App() {

  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className='flex flex-col w-1/3  overflow-y-auto gap-5'>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Abrir modal
          </button>
          <section className="flex flex-col  p-4 overflow-y-auto gap-5">
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
        </div>
        {
          selectedTicket ? <TicketDetails ticket={selectedTicket} />
            :
            <div className="flex-1 p-4 flex items-center justify-center text-gray-400">
              Seleccioná un ticket para ver los detalles.
            </div>
        }
      </div>
      <NewTicketForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </>
  )
}

export default App
