import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function handleChange(e) {
    console.log(e);
  }
  return (
    <div>
      <form>
        <input onChange={(e) => handleChange(e)} type="text" value={name} />
      </form>
    </div>
  );
}
