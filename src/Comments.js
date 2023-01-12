import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate, commentsLoad } from './redux/Actions';
import SingleComment from './SingleComment';

const Comments = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);

  const [textComment, setTextComment] = useState('');

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(commentCreate(textComment, Date.now()));
    setTextComment('');
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item">
        <div className="omments-item-create"></div>
        <input value={textComment} onChange={handleInput} placeholder="Comment"></input>
        <input type="submit" hidden></input>
      </form>
      {comments.map((item) => (
        <SingleComment key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Comments;
