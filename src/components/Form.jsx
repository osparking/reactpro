import { useState } from "react"

export default function Form() {
  const [name, setName] = useState("");

  function handleChange() {
    console.log("name 입력 상자 값 변화됨!");
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value={name} />
      </form>
    </div>
  );
}
