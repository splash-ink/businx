import { GrowthCardModel } from './growth-card/growth-card.model';

export const TERMS = 'O cliente deve tomar conhecimento sobre os itens da factura antes do pagamento. O pagamento de toda a factura deve se\
r feito no prazo da factura, sendo que no contrário será necessário a emissão de uma nova. Não fazemos devoluções de valores.';

export const growthCardsDemo: GrowthCardModel [] = [
  {
    from: 'Design Grafico',
    previews: 3200,
    current: 4800,
    themeColor: 'bg-gradient-dark'
  },
  {
    from: 'Tecnologia & Marketing Digital',
    previews: 10500,
    current: 18000,
    themeColor: 'bg-gradient-dark'
  },
  {
    from: 'Beauty & MakeUp',
    previews: 27000,
    current: 7350,
    themeColor: 'bg-gradient-dark'
  }
];
