import { useCustomeCounter } from "../hooks/useCustomeCounter";

export const CounterHook = () => {
    const {count, handelCount} = useCustomeCounter()
  return (
    <>
      <h2>This is my custome hook for the counter</h2>
      <span>Count: {count}</span>
      <button onClick={handelCount}>Increment </button>

    </>
  );
};
