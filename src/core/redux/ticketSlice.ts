import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadTicketsFromStorage, saveTicketsToStorage } from '../utils/ticketsStorage';
import type { Message, Ticket } from '../types/ticket';
import { mockTickets } from '../utils/mock/mockTickets';
import { setLastTicketId } from '../utils/lastTicketIdStorage';

interface TicketsState {
    tickets: Ticket[];
    selectedTicketId: string | null;
}

const initialState: TicketsState = {
    tickets: loadTicketsFromStorage(),
    selectedTicketId: null,
};

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        initialDummyData(state) {
            state.tickets = mockTickets;
            setLastTicketId(mockTickets.length);
            saveTicketsToStorage(state.tickets);
        },
        addTicket(state, action: PayloadAction<Ticket>) {
            state.tickets.push(action.payload);
            saveTicketsToStorage(state.tickets);
        },
        addMessageToTicket(
            state,
            action: PayloadAction<{ ticketId: string; message: Message }>
        ) {
            const ticket = state.tickets.find((t) => t.id === action.payload.ticketId);
            if (ticket) {
                ticket.messages.push(action.payload.message);
                saveTicketsToStorage(state.tickets);
            }
        },
        closeTicket(state, action: PayloadAction<string>) {
            const ticket = state.tickets.find((t) => t.id === action.payload);
            if (ticket) {
                ticket.status = 'closed';
                saveTicketsToStorage(state.tickets);
            }
        },
        selectTicket(state, action: PayloadAction<string | null>) {
            state.selectedTicketId = action.payload;
        },
    }
});

export const { addTicket, addMessageToTicket, closeTicket, initialDummyData, selectTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
