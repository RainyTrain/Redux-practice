const SingleComment = (props) => {
  return (
    <div className="card-comments">
      <form className="comments-item">
        <div className="comments-item-delete">&times;</div>
        <input type="text"></input>
        <input type="submit" hidden></input>
      </form>
    </div>
  );
};

export default SingleComment;
