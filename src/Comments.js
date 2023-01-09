import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate } from './redux/Actions';
import SingleComment from './SingleComment';

const Comments = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);
  const [textComment, setTextComment] = useState('');

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(commentCreate(Date.now(), textComment));
    setTextComment('');
  };

  console.log(comments);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item">
        <div className="omments-item-create">&times;</div>
        <input value={textComment} onChange={handleInput} placeholder="Comment"></input>
        <input type="submit" hidden></input>
      </form>
      <SingleComment />
    </div>
  );
};

export default Comments;
