export interface Contacts {
    name: string;
    company?: string;
    email?: string;
    phone: string | number;
    invoices?: Invoice [];
}

export const CONTACTS_TABLE_COLUMNS = [
    'Nome',
    'Empresa',
    'E-mail',
    'Telefone'
];

interface Invoice {}