import { connect } from 'react-redux';
import './App.css';
import { decrementLikes, incrementLikes } from './redux/Actions';

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikes: () => {
      dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      dispatch(decrementLikes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
