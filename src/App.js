import PhoneComponent from './components/PhoneComponent';
import { Provider } from 'react-redux';
import store from './redux/store';
import TvComponent from './components/TvComponent';

function App() {
  return (
    <Provider store={store}>
      <div className='container my-4'>
        <div className='row justify-content-center'>
          <PhoneComponent />
          <TvComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
