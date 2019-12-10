export interface Contacts {
    name: string;
    company?: string;
    email?: string;
    phone: string | number;
    invoices?: Invoice [];
}

interface Invoice {}

export interface Coins {
    code: string;
    currency: string;
    country: string;
}