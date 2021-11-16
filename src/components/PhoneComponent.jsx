import { React, useState } from 'react';
import { connect /* useSelector, useDispatch */ } from 'react-redux';
import { buy_phone } from '../redux/phone/actionPhone';
import phone from '../images/phone.png';

function PhoneComponent(props) {
  console.log(props);
  const [nbItem, setNbItems] = useState(1);
  return (
    <div className='col-4 border border-dark rounded-0 text-center py-4 px-0 mx-3'>
      <img src={phone} alt='Phone' width={55} height={110} className='my-5' />
      <p className='font-weight-bold h5'>
        Disponibilité : <span id='count'>{props.phones}</span>
      </p>
      <div
        className='mt-2 mx-auto py-2 px-2'
        style={{ backgroundColor: '#61216a', width: '90%' }}
      >
        <button
          className='btn btn-lg rounded-0 border-0 text-white'
          onClick={() => props.buyPhone(nbItem)}
          disabled={props.phones - nbItem >= 0 ? false : true}
        >
          Acheter
        </button>
        <input
          style={{ width: '20%', display: 'inline', fontSize: '150%' }}
          className='float-right my-auto rounded-sm border-white'
          type='text'
          onChange={(e) => setNbItems(e.target.value)}
          value={nbItem}
        />
      </div>
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
    buyPhone: (nbItem) => dispatch(buy_phone(nbItem))
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
