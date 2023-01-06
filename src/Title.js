const Title = (props) => {
    const handleChange = (e) => {
        console.log(e.target.value)
    }
  return (
    <div className="cart-title">
      <div className="cart-title-top">
        <input onChange={handleChange}></input>
      </div>
    </div>
  );
};

export default Title
