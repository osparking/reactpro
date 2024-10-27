import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function handleChange(e) {
    console.log("name 입력 상자 값 변화됨!");
  }
  return (
    <div>
      <form>
        <input
          onChange={function demo(e) {
            return handleChange(e);
          }}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
