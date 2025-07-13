import type { Ticket } from "../types/ticket";

const STORAGE_KEY = 'tickets';

export function saveTicketsToStorage(tickets: Ticket[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}

export function loadTicketsFromStorage(): Ticket[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
