import { Item } from '@businx/data-models';

export class ICartItem {
    constructor(public item: Item, public quantity: number, public urgency: boolean = false) {}

    getTax (): number {
        return this.getTotal() * 0.14;
    }

    getTotal (): number {
        return this.item.price * this.quantity;
    }
}
