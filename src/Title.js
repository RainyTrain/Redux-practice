import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/Actions';

const Title = (props) => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.inputReducer.text);

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="cart-title">
      <div className="cart-title-top">
        <input value={title} placeholder="Leave a comment" onChange={handleChange}></input>
      </div>
    </div>
  );
};

export default Title;
