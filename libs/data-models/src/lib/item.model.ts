export interface Item {
    id: string | number;
    service: string;
    price: number;
    type: string;
    description: string | null;
    buyInfo: boolean;
    buyPrice?: number | null;
    buyDescription?: string | null;
    history?: Array<Item> | null;
}
