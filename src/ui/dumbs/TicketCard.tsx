import type { Ticket } from "../../core/types/ticket";

export const TicketCard = ({ ticket }: { ticket: Ticket }) => {
    return (
        <div className="w-md p-4 border bg-gray-800 rounded-lg shadow-md ">
            <span className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-white">{ticket.customerName}</h2>
                <p className="font-bold">ID: #{ticket.id}</p>
            </span>
            <hr />
            <h3>{ticket.subject}</h3>
        </div>
    );
}