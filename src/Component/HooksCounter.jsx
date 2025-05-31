import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counter/actionCreator";

function HooksCounter({ index }) {
  const count = useSelector((state) => state.counters);
  const dispatch = useDispatch();
console.log(count);

  const add = (val) => {
    dispatch(increment(val));
  };

  const minus = (val) => {
    dispatch(decrement(val));
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">
          <span className=" text-orange-500">Counter_{index + 1}</span>: {count[index]}
        </div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={() => add(index)}
          >
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={() => minus(index)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default HooksCounter;
