import { Contacts } from '../contacts/contacts.model';
import { ICartItem } from './cart/cart.model';

export class IInvoice {
    constructor(public invoice: Invoice) {}

    payload () {
        const i = this.invoice;
        const subtotal = this.subtotal();
        const tax = this.tax();
        const total = this.total();

        return { ...i, subtotal, tax, total };
    }

    subtotal () {
        const { items } = this.invoice;
        let subtotal = 0;

        items.find((item) => {
            subtotal += (item.item.price * item.quantity);
        });

        return subtotal;
    }

    tax () {
        const { items } = this.invoice;
        let tax = 0;

        items.find((item) => {
            tax += item.getTax();
        });

        return tax;
    }

    total () {
        const { ship } = this.invoice;

        return (this.subtotal() + this.tax() + ship);
    }
}

export interface Invoice {
    id?: string | number;
    buyer: Contacts;
    items: ICartItem[]
    issue_date: number;
    due_date: Date;
    discounts?: number;
    ship?: number;
}
