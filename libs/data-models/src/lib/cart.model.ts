import { Item } from './item.model';

export interface CartItem {
    id: string | number;
    item: Item;
    quantity: number;
    urgency?: boolean;
}