import { Contact } from '@businx/billing/contacts';

export interface OrderState {
  archived?: boolean,
  billed?: boolean,
  canceled?: boolean,
  payed?: boolean,
  pending?: boolean,
  shipped?: boolean,
};

export interface OrderItem {
  name: string;
  description: string;
  price: number;
  qty: number;
  total: number
}

/**
 * This is the base model to be used when creates an new "Order" or render 'em on template.
 * @param status is setted as "Pending" by default
 */
export interface Order {
  id: string | number;
  buyer: Contact;
  shopItems: OrderItem [];
  date: {
    issue: Date | number;
    due: Date | number;
  };
  status: OrderState;
  ship: number;
  discounts?: number;
  tax: number;
  subtotal: number;
  total: number;
}
