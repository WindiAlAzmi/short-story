import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";
import PaginationComponent from "../components/PaginationComponent";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      <PaginationComponent />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
