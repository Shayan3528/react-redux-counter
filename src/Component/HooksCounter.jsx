import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counter/actionCreator";

function HooksCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increment());
  };

  const minus = () => {
    dispatch(decrement());
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">
          <span className=" text-orange-500">Counter</span>: {count}
        </div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={add}
          >
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={minus}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default HooksCounter;
