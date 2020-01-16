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
            id: '1',
            item: {
                id: 1,
                service: 'My Cart Item 1',
                price: 5100,
                description: 'Some description from service',
                type: 'design',
                buyInfo: false
            },
            quantity: 1,
            urgency: false
        },
        {
            id: '2',
            item: {
                id: 2,
                service: 'My Cart Item 2',
                price: 5200,
                description: 'Some description from service',
                type: 'design',
                buyInfo: false
            },
            quantity: 2,
            urgency: false
        },
        {
            id: '3',
            item: {
                id: 3,
                service: 'My Cart Item 3',
                price: 5300,
                description: 'Some description from service',
                type: 'design',
                buyInfo: false
            },
            quantity: 3,
            urgency: false
        },
        {
            id: '4',
            item: {
                id: 4,
                service: 'My Cart Item 4',
                price: 5400,
                description: 'Some description from service',
                type: 'design',
                buyInfo: false
            },
            quantity: 4,
            urgency: false
        },
        {
            id: '5',
            item: {
                id: 5,
                service: 'My Cart Item 5',
                price: 5500,
                description: 'Some description from service',
                type: 'design',
                buyInfo: false
            },
            quantity: 5,
            urgency: false
        }
    ]
}