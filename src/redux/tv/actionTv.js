import { BUY_TV } from './types';

export const buy_tv = (nbTv) => {
  return {
    type: BUY_TV,
    payload: nbTv
  };
};
