import { firebaseConfigDev } from './environment-utils.secret';

export const environment = {
  production: false,
  firebaseConfig: {
    ...firebaseConfigDev
  }
};
