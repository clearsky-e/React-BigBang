import { useState } from "react";

export const LearnState = () => {
  const [count, setCount] = useState(0);
  const add = (e) => {
    e.preventDefault();
    setCount(count +1);
  };



  const remove = (e)=>{
    e.preventDefault();
    setCount(count -1);

  }

  const clear =()=>{
    setCount(0)
  }

  return (
    <>
      <span>
        {count}
        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
        <button onClick={clear}>clear</button>
      </span>
    </>
  );
};
