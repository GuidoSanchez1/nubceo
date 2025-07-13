import type { Ticket } from "../../core/types/ticket";

export const TicketDetails = ({ ticket }: { ticket: Ticket | null }) => {
    if (!ticket) {
        return <section className="p-4 text-gray-500">Seleccione un ticket para ver los detalles.</section>;
    }

    return (
        <section className="flex-1 p-4 bg-gray-800 rounded shadow border border-gray-700">
            <div className="bg-gray-800 rounded-lg shadow p-6 text-white h-full flex flex-col">
                <span className="text-start text-2xl font-bold">{ticket.subject}</span>
                <div className="mb-6 border-b border-gray-600 pb-4">
                    <div className="mt-2 flex flex-wrap items-center text-sm gap-4 text-gray-400">
                        <span>
                            <strong>ID:</strong> #{ticket.id}
                        </span>
                        <span>
                            <strong>Cliente:</strong> {ticket.customerName}
                        </span>
                        <span>
                            <strong>Estado: </strong>
                            <span className={`font-bold ${ticket.status === 'open' ? 'text-green-400' : 'text-red-400'}`}>
                                {ticket.status === 'open' ? 'Abierto' : 'Cerrado'}
                            </span>
                        </span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <h3 className="text-lg font-semibold mb-3 text-gray-200">Conversación</h3>
                    <ul className="space-y-4">
                        {ticket.messages.map((msg) => (
                            <li key={msg.id} className="bg-gray-700 p-4 rounded-md shadow-sm">
                                <div className="text-sm text-gray-300 mb-1">
                                    {new Date(msg.createdAt).toLocaleString()}
                                </div>
                                <div className="text-gray-100 text-base">{msg.content}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}   