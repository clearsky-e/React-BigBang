import { useState } from "react";

export const useCustomeCounter = () => {
  const [count, setCount] = useState(0);
  const handelCount = () => {
    setCount(count + 1);
  };

  return {
    count,
    handelCount,
  };
};
