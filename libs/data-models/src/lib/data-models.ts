export interface Contacts {
    name: Personal | string;
    company?: string;
    email?: string;
    phone: Mobile;
    invoices?: Invoice [];
}

export const CONTACTS_TABLE_COLUMNS = [
    'Nome',
    'Empresa',
    'E-mail',
    'Actividade',
    'Vendas totais'
];

interface Mobile {
    code: string;
    phone: number;
}

interface Personal {
    first: string;
    last: string;
}

interface Invoice {}