import { useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions/mood-action";

const Happyinc = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  function Increment() {
    dispatch(happyButtonClicked(quantity, new Date()));
  }
  return (
    <div className="text-center">
      <div> Are you happy ?</div>
      <input
        className="border-black border-2 rounded-md"
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      />
      <button className="px-2 bg-yellow-500 rounded-md" onClick={Increment}>
        Yes
      </button>
    </div>
  );
};

export default Happyinc;
// button component naya banana h
