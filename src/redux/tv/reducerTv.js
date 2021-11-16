import { BUY_TV } from './types';

const initialStatePhone = {
  tv: 10
};

const tvReducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - 1
      };

    default:
      return state;
  }
};

export default tvReducer;
