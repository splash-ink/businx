export interface Contacts {
    id: string | number;
    accountType?: string;
    greet?: string;
    name: string;
    company?: string;
    email?: string;
    phone: string | number;
    nif?: string;
    coin?: Coins | string;
    invoices?: Invoice [];
}

interface Invoice {}

export interface Coins {
    code: string;
    currency: string;
    country: string;
}