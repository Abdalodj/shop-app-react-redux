import React from 'react';
import { connect } from 'react-redux';
import tv from '../images/tv.png';
import { buy_tv } from '../redux/tv/actionTv';

function TvComponent(props) {
  return (
    <div className='col-4 border border-dark rounded-0 text-center py-4 px-0 mx-3'>
      <img src={tv} alt='Phone' width={150} height={110} className='my-5' />
      <p className='font-weight-bold h5'>
        Disponibilité : <span id='count'>{props.tv}</span>
      </p>
      <button
        className='btn btn-lg btn-primary px-5 rounded-0 border-0 mt-2'
        style={{ backgroundColor: '#61216a', width: '80%' }}
        onClick={() => props.buyTV()}
        disabled={props.tv > 0 ? false : true}
      >
        Acheter
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tv: state.reduceTv.tv
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyTV: () => dispatch(buy_tv())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvComponent);
