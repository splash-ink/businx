import { IInvoice } from '@businx/billing/shopping/invoice.model';

export interface Contact {
    id: string | number;
    accountType?: string;
    greet?: string;
    name: string;
    company?: string;
    email?: string;
    phone: string | number;
    nif?: string;
    coin?: string;
    invoices?: IInvoice [];
}
