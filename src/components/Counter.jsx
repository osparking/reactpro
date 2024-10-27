import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);
  function incByOne() {
    setCount(count + delta);
  }
  function decByOne() {
    setCount(count - delta);
  }
  function incDelta() {
    setDelta(delta + 1);
  }
  function decDelta() {
    setDelta(delta - 1);
  }
  return (
    <div>
      <h3>계수기: {count}</h3>
      <button onClick={incByOne}>증가</button>
      <button onClick={decByOne}>감소</button>
      <h3>델타: {delta}</h3>
      <button onClick={incDelta}>증가</button>
      <button onClick={decDelta}>감소</button>
    </div>
  );
}
