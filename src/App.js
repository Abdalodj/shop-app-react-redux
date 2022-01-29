import PhoneComponent from './components/PhoneComponent';
import { Provider } from 'react-redux';
import store from './redux/store';
import TvComponent from './components/TvComponent';
import CommentComponent from './components/CommentComponent';

function App() {
  return (
    <Provider store={store}>
      <div className='container my-4'>
        <div className='row justify-content-center'>
          <PhoneComponent warning='Stock épuisé' />
          <TvComponent warning='Stock épuisé' />
        </div>
        <div
          className='row justify-content-center my-5 d-inline-block'
          style={{ maxHeight: '400px', height: '380px' }}
        >
          <CommentComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
