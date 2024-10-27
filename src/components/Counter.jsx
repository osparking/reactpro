import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>계수기: {count}</h3>
    </div>
  );
}
