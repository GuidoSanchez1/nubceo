import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from './Modal';
import { v4 as uuidv4 } from 'uuid';
import { addTicket } from '../../core/redux/ticketSlice';
import { getNextTicketId, setLastTicketId } from '../../core/utils/lastTicketIdStorage';

interface NewTicketFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const NewTicketForm = ({ isOpen, onClose }: NewTicketFormModalProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const data = new FormData(form);
        const customerName = data.get('customerName')?.toString().trim();
        const subject = data.get('subject')?.toString().trim();
        const message = data.get('message')?.toString().trim();

        if (!customerName || !subject || !message) return;

        const newTicket = {
            id: getNextTicketId(),
            customerName,
            subject,
            status: 'open' as const,
            messages: [
                {
                    id: uuidv4(),
                    content: message,
                    createdAt: new Date().toISOString(),
                    fromCustomer: true
                },
            ],
            createdAt: new Date().toISOString(),
        };

        setLastTicketId(newTicket.id);
        dispatch(addTicket(newTicket));
        form.reset();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Nuevo Ticket">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="customerName">
                        Nombre del cliente
                    </label>
                    <input
                        name="customerName"
                        required
                        className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="subject">
                        Asunto
                    </label>
                    <input
                        name="subject"
                        required
                        className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">
                        Mensaje inicial
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full px-3 py-2 rounded bg-gray-700 text-white max-h-50"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                        Crear Ticket
                    </button>
                </div>
            </form>
        </Modal>
    );
};
