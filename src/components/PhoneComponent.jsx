import { React } from 'react';
import { connect /* useSelector, useDispatch */ } from 'react-redux';
import { buy_phone } from '../redux/phone/actionPhone';
import phone from '../images/phone.png';

function PhoneComponent(props) {
  console.log(props);
  return (
    <div className='col-4 border border-dark rounded-0 text-center py-4 px-0 mx-3'>
      <img src={phone} alt='Phone' width={55} height={110} className='my-5' />
      <p className='font-weight-bold h5'>
        Disponibilité : <span id='count'>{props.phones}</span>
      </p>
      <button
        className='btn btn-lg btn-primary px-5 rounded-0 border-0 mt-2'
        style={{ backgroundColor: '#61216a', width: '80%' }}
        onClick={() => props.buyPhone()}
        disabled={props.phones > 0 ? false : true}
      >
        Acheter
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phones: state.reducePhones.phones
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buy_phone())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);

/**
 * Using react-redux
 * UseSelector to fetch my states
 * UseDispatch to dispatch an action
 */
/* function PhoneComponent() {
  const phones = useSelector((state) => state.phones);
  const dispatch = useDispatch();
  return (
    <div className='col-4 border border-dark rounded-0 text-center py-4 px-0'>
      <img src={phone} alt='Phone' width={55} height={110} className='my-5' />
      <p className='font-weight-bold h5'>
        Disponibilité : <span id='count'>{phones}</span>
      </p>
      <button
        className='btn btn-lg btn-primary px-5 rounded-0 border-0 mt-2'
        style={{ backgroundColor: '#61216a', width: '80%' }}
        onClick={() => dispatch(buy_phone())}
        disabled={phones > 0 ? false : true}
      >
        Acheter
      </button>
    </div>
  );
}
export default connect()(PhoneComponent); */
