import { connect } from 'react-redux';
import './App.css';

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
      <button>Dislike</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
  };
};

const mapDispatchToProps = (dipatch) => {
    return {
        onIncrementLikes: () => {
            console.log('click')
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Likes);
