const STORAGE_KEY = 'lastTicketId';

export function getNextTicketId(): string {
    const raw = localStorage.getItem(STORAGE_KEY);
    const current = Number.isInteger(Number(raw)) ? parseInt(raw!, 10) : 0;
    const next = current + 1;

    localStorage.setItem(STORAGE_KEY, String(next));
    return String(next);
}

export function setLastTicketId(id: number | string) {
    const numericId = parseInt(String(id), 10);
    if (!isNaN(numericId)) {
        localStorage.setItem(STORAGE_KEY, String(numericId));
    }
}

export function getLastTicketId(): string {
    return localStorage.getItem(STORAGE_KEY) || '0';
}

export function resetLastTicketId() {
    localStorage.removeItem(STORAGE_KEY);
}
