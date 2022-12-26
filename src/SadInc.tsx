import { useState } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions/mood-action";

function SadInc() {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function Increment() {
    dispatch(sadButtonClicked(quantity, new Date()));
  }

  return (
    <div className="text-center">
      <div> Are you sad ?</div>
      <input
        className="border-black border-2 rounded-md"
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      />
      <button onClick={Increment} className="px-2 bg-yellow-500 rounded-md">
        Yes
      </button>
    </div>
  );
}

export default SadInc;
