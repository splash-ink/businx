import { CartItem, Contacts } from '@businx/data-models';

export interface Invoice {
    id: string | number;
    buyer: Contacts;
    items: CartItem[]
    issue_date: Date;
    due_date: Date;
}