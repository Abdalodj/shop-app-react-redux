import axios from 'axios';
import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_ERROR,
  LOAD_COMMENTS_SUCCESS
} from './types';

export const loadApiComments = () => {
  return {
    type: LOAD_COMMENTS
  };
};

export const loadApiCommentsSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments
  };
};

export const loadApiCommentsError = (err) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: err
  };
};

export const apiCall = () => {
  return (dispatch) => {
    dispatch(loadApiComments());

    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        dispatch(loadApiCommentsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loadApiCommentsError(err.message));
      });
  };
};
