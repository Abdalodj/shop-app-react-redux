import { BUY_TV } from './types';

const initialStatePhone = {
  tv: 10
};

const tvReducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - action.payload
      };

    default:
      return state;
  }
};

export default tvReducer;
