export interface Item {
    id: string | number;
    name: string;
    price: number;
    nature: string;
    description: string | null;
    buyInfo: boolean;
    buyPrice?: number | null;
    buyDescription?: string | null;
    history?: Array<Item> | null;
}

export type itemPreview = Omit<Item, 'history' | 'buyDescription' | 'buyPrice' | 'buyInfo' | 'description'>
