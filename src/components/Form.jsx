import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ lastName: "", firstName: "" });
  console.log(name.lastName);
  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({ lastName: e.target.value, firstName: "" })}
          type="text"
          value={name.lastName}
        />
      </form>
    </div>
  );
}
