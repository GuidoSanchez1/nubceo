import type { Message } from "../../core/types/ticket";

export const TicketMessages = ({ messages }: { messages: Message[] }) => {


    return (
        <div className="flex flex-1 flex-col overflow-y-auto max-h-[50vh]">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Mensajes</h3>
            <ul className="flex flex-col gap-4">
                {messages.map((msg) => (
                    // <li key={msg.id} className={`w-lg p-4 rounded-md shadow-sm overflow-y-auto ${msg.fromCustomer ? 'self-start bg-gray-700' : 'self-end bg-sky-950'}`}>
                    <li key={msg.id} className={`w-lg p-4 rounded-md shadow-sm overflow-y-auto bg-gray-700`}>
                        <div className="text-gray-100 text-base text-start">{msg.content}</div>
                        <div className="text-sm text-gray-300 mb-1 text-start">{new Date(msg.createdAt).toLocaleString()}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}