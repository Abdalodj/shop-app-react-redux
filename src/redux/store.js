import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';
import commentsReducer from './comments/reducerComments';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  reducePhones: phoneReducer,
  reduceTv: tvReducer,
  comments: commentsReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
