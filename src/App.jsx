import { Provider } from "react-redux";
import Counter from "./Component/Counter";
import Sum from "./Component/Sum";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        <Counter index={0} />
        <Counter index={1} />
        <Sum />
      </div>
    </Provider>
  );
}

export default App;
