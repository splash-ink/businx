import { firebaseConfigDev } from './environment-utils.secret';

export const environment = {
  production: true,
  firebaseConfig: {
    ...firebaseConfigDev
  }
};
