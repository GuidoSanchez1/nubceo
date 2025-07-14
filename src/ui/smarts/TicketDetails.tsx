import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addMessageToTicket, closeTicket } from '../../core/redux/ticketSlice';
import { v4 as uuidv4 } from 'uuid';
import type { Ticket } from '../../core/types/ticket';
import { TicketMessages } from '../dumbs/TicketMessages';

interface TicketDetailsProps {
    ticket: Ticket;
}

export const TicketDetails = ({ ticket }: TicketDetailsProps) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<{ message: string }>();

    const onSubmit = (data: { message: string }) => {
        dispatch(
            addMessageToTicket({
                ticketId: ticket.id,
                message: {
                    id: uuidv4(),
                    content: data.message,
                    createdAt: new Date().toISOString(),
                },
            })
        );
        reset();
    };

    const handleCloseTicket = () => {
        dispatch(closeTicket(ticket.id));
    };

    return (
        <section className="flex-1 p-4 bg-gray-800 rounded shadow border border-gray-700">
            <div className="mb-6 border-b border-gray-600 pb-4">
                <h2 className="text-start text-2xl font-bold">{ticket.subject}</h2>
                <div className="mt-2 flex flex-wrap items-center text-sm gap-4 text-gray-400">
                    <span><strong>ID:</strong> #{ticket.id}</span>
                    <span><strong>Cliente:</strong> {ticket.customerName}</span>
                    <span>
                        <strong>Estado:</strong>{' '}
                        <span className={`font-bold ${ticket.status === 'open' ? 'text-green-400' : 'text-red-400'}`}>
                            {ticket.status === 'open' ? 'Abierto' : 'Cerrado'}
                        </span>
                    </span>
                </div>
            </div>

            <TicketMessages messages={ticket.messages} />

            {ticket.status === 'open' && (
                <div className="mt-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-200">Responder</h3>
                        <textarea
                            {...register('message', { required: true, minLength: 10 })}
                            className="w-full bg-gray-700 text-white p-2 rounded max-h-50 min-h-20"
                            placeholder="Escribí tu respuesta..."
                        />
                        {errors.message && (
                            <p className="text-sm text-red-400">El mensaje debe tener al menos 10 caracteres.</p>
                        )}

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                            >
                                Enviar respuesta
                            </button>
                            <button
                                type="button"
                                onClick={handleCloseTicket}
                                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                            >
                                Cerrar ticket
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </section>
    );
};
