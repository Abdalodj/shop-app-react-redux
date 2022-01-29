import React, { useState } from 'react';
import { connect } from 'react-redux';
import tv from '../images/tv.png';
import { buy_tv } from '../redux/tv/actionTv';

function TvComponent(props) {
  const [nbItem, setNbItems] = useState(1);
  return (
    <div className='col-4 border border-dark rounded-0 text-center py-4 px-0 mx-3'>
      <img src={tv} alt='Phone' width={150} height={110} className='my-5' />

      {props.msg ? (
        <p className='font-weight-bold h5'>{props.msg}</p>
      ) : (
        <p className='font-weight-bold h5'>
          Disponibilité : <span id='count'>{props.tv}</span>
        </p>
      )}

      <div
        className='mt-2 mx-auto py-2 px-2'
        style={{ backgroundColor: '#61216a', width: '90%' }}
      >
        <button
          className='btn btn-lg rounded-0 border-0 text-white'
          onClick={() => props.buyTV(nbItem)}
          disabled={props.tv - nbItem >= 0 ? false : true}
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

const mapStateToProps = (state, ownProps) => {
  return {
    tv: state.reduceTv.tv,
    ...(state.reduceTv.tv < 1 && { msg: ownProps.warning })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyTV: (nbItem) => dispatch(buy_tv(nbItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvComponent);
