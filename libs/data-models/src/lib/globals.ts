import { Coins } from './data-models';

export const GREETINGS = [
    'Sr.',
    'Sra.',
    'Dr.',
    'Dra.',
    'Eng.'
];

export const COINS: Coins [] = [
    {
        code: "AOA",
        currency: "KZ",
        country: 'Angola'
    },
    {
        code: "US",
        currency: "USD",
        country: 'United States'
      },
      {
        code: "NG",
        currency: "NGN",
        country: 'Nigeria'
      },
      {
        code: 'KE',
        currency: 'KES',
        country: 'Kenya'
      },
      {
        code: 'UG',
        currency: 'UGX',
        country: 'Uganda'
      },
      {
        code: 'RW',
        currency: 'RWF',
        country: 'Rwanda'
      },
      {
        code: 'TZ',
        currency: 'TZS',
        country: 'Tanzania'
      },
      {
        code: 'ZA',
        currency: 'ZAR',
        country: 'South Africa'
      },
      {
        code: 'CM',
        currency: 'XAF',
        country: 'Cameroon'
      },
      {
        code: 'GH',
        currency: 'GHS',
        country: 'Ghana'
      }
];

export const CONTACTS_TABLE_COLUMNS = [
  'Nome',
  'Empresa',
  'E-mail',
  'Telefone'
];

export const ITEMS_TABLE_COLUMNS = [
  'Nome',
  'Preço',
  'Natureza'
];