import { Invoice, IInvoice } from '@businx/billing/shopping/invoice.model';
import { ICartItem } from '@businx/billing/shopping/cart/cart.model';

export const TERMS = 'O cliente deve tomar conhecimento sobre os itens da factura antes do pagamento. O pagamento de toda a factura deve se\
r feito no prazo da factura, sendo que no contrário será necessário a emissão de uma nova. Não fazemos devoluções de valores.';


const timestamp = Date.now();
const dueDate: Date = new Date();

dueDate.setDate(dueDate.getDate() + 14);

const InvoiceDataset: Invoice = {
    id: '0000048',
    buyer: {
        id: 'dxkt0wap2qws',
        name: 'Jorge Dacosta',
        phone: '+244900000000',
    },
    issue_date: timestamp,
    due_date: dueDate,
    items: [
        new ICartItem({
            id: 1,
            service: 'Business Card',
            price: 180,
            type: 'print',
            description: 'Some description about product',
            buyInfo: false
        }, 100),
        new ICartItem({
            id: 1,
            service: 'Trifold Broshure',
            price: 325,
            type: 'print',
            description: 'Some description about product',
            buyInfo: false
        }, 30)
        ],
    ship: 0,
    discounts: 0
}

export const DEMO: IInvoice = new IInvoice(InvoiceDataset);
