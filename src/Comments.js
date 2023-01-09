import SingleComment from './SingleComment';

const Comments = (props) => {
  return (
    <div className="card-comments">
      <form className="comments-item">
        <div className="omments-item-create">&times;</div>
        <input></input>
        <input type="submit" hidden></input>
      </form>
      <SingleComment />
    </div>
  );
};

export default Comments;
