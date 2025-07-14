export type TicketStatus = 'open' | 'closed';

export interface Message {
    id: string;
    content: string;
    createdAt: string;
}

export interface Ticket {
    id: string;
    customerName: string;
    subject: string;
    status: TicketStatus;
    createdAt: string;
    messages: Message[]
}

export interface ResponderTicketFormValues {
    ticketId: string;
    message: string
}

export interface CrearTicketFormFields {
    customerName: string;
    subject: string;
    message: string
}