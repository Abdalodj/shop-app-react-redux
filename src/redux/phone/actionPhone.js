import { BUY_PHONE } from './types';

export const buy_phone = (nbPhones) => {
  return {
    type: BUY_PHONE,
    payload: nbPhones
  };
};
