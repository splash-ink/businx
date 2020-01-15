import { Invoice } from './invoice';

export const TERMS = 'O cliente deve tomar conhecimento sobre os itens da factura antes do pagamento. O pagamento de toda a factura deve se\
r feito no prazo da factura, sendo que no contrário será necessário a emissão de uma nova. Não fazemos devoluções de valores.';


const timestamp = Date.now();
const dueDate: Date = new Date();

dueDate.setDate(dueDate.getDate() + 14);

export const DEMO: Invoice = {
    id: '0000048',
    buyer: {
        id: 'dxkt0wap2qws',
        name: 'Jorge Dacosta',
        phone: '+244900000000',
    },
    issue_date: timestamp,
    due_date: dueDate,
    items: [
        {
            id: '0',
            item: {
                id: 0,
                service: 'My Cart Item',
                price: 5900,
                description: 'Some description from service',
                type: 'design',
                buyInfo: false
            },
            quantity: 1,
            urgency: false
        }
    ]
}