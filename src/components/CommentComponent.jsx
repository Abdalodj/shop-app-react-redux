import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiCall } from '../redux/comments/actionComments';

const CommentComponent = ({ apiData, apiComment }) => {
  console.log(apiComment);
  useEffect(() => {
    apiComment();
  }, [apiComment]);

  const displayApiData = apiData.isLoading ? (
    <p>Loading ...</p>
  ) : apiData.error ? (
    <p>{apiData.error}</p>
  ) : (
    apiData.comments.map((comment) => {
      return (
        <div className='card mb-2' key={comment.id}>
          <div className='card-body overflow-auto p-2'>
            <h5 className='card-title'>{comment.email}</h5>
            <p className='card-text'>{comment.body}</p>
          </div>
        </div>
      );
    })
  );

  return (
    <div className='col-10'>
      <h2>Commentaires</h2>
      <hr />
      <div className='card background-transparent'>
        <div className='card-body overflow-auto p-2'>
          <div
            className='justify-content-center align-items-center pre-scrollable px-2 py-2'
            style={{ backgroundColor: '#f5f5f5' }}
          >
            {displayApiData}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apiData: state.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    apiComment: () => dispatch(apiCall())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
