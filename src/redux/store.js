import { createStore, combineReducers } from 'redux';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';

const rootReducer = combineReducers({
  reducePhones: phoneReducer,
  reduceTv: tvReducer
});

const store = createStore(rootReducer);

export default store;
