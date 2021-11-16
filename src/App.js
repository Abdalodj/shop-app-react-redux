import PhoneComponent from './components/PhoneComponent';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='container my-4'>
        <div className='row justify-content-center'>
          <PhoneComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
