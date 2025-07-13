import type { Ticket } from "../../core/types/ticket";

interface TicketCardProps {
    ticket: Ticket;
    onSelect: () => void;
    selected?: boolean;
}


export const TicketCard = ({ ticket, onSelect, selected }: TicketCardProps) => {
    return (
        <div
            className={` p-4 border rounded cursor-pointer transition-colors ${selected ? 'bg-gray-900 border-blue-500' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={onSelect}
        >
            <span className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-white">{ticket.customerName}</h2>
                <p className="font-bold">ID: #{ticket.id}</p>
            </span>
            <hr />
            <div className="flex flex-row justify-between mt-2">
                <p className="text-sm text-gray-400 mt-2">{ticket.subject}</p>
                <span className={`text-xs font-bold mt-2 ${ticket.status === 'open' ? 'text-green-500' : 'text-red-500'}`}>
                    {ticket.status === 'open' ? 'Abierto' : 'Cerrado'}
                </span>
            </div>
        </div>
    );
}