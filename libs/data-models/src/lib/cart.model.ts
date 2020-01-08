import { Item } from './item.model';

export interface Cart {
    id: string | number;
    items: CartItem[]
    issue_date: Date;
    due_date: Date;
}

export interface CartItem {
    id: string | number;
    item: Item;
    quantity: number;
    urgency?: boolean;
}