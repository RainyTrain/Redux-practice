import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentDelete, commentUpdate } from './redux/Actions';

const SingleComment = (props) => {
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState(props.data.text);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, props.data.id));
  };

  const hadleDelete = () => {
    dispatch(commentDelete(props.data.id));
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleUpdate} className="comments-item">
        <div onClick={hadleDelete} className="comments-item-delete">
          &times;
        </div>
        <input type="text" value={commentText} onChange={handleInput}></input>
        <input type="submit" hidden></input>
      </form>
    </div>
  );
};

export default SingleComment;
