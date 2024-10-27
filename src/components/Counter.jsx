import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function incByOne() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>계수기: {count}</h3>
      <button onClick={incByOne}>
        1 증가
      </button>
    </div>
  );
}
