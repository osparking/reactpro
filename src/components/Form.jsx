import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ lastName: "", firstName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.lastName} - {name.firstName}
      <form>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <button onClick={(e) => handleSubmit(e)}>제출</button>
      </form>
    </div>
  );
}
