
import { mockTickets } from '../core/mock/tickets'
import './App.css'
import { TicketCard } from './dumbs/TicketCard'

function App() {

  return (
    <>
      <div className="App">
        {/* <NavBar /> */}
        <h1 className="text-2xl font-bold mb-4">Tickets</h1>
        <div className="flex flex-col gap-5">
          {
            mockTickets.map(ticket => (
              <TicketCard
                key={ticket.id}
                ticket={ticket} />
            )
            )}
        </div>
      </div>
    </>
  )
}

export default App
