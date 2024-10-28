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
        <input
          onChange={(e) => setName({ lastName: "", firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
      </form>
    </div>
  );
}
