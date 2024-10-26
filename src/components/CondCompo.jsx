import CompoFalse from "./CompoFalse";
import CompoTrue from "./CompoTrue";

export default function CondCompo() {
  let message1 = <h3>이것은 하나의 전갈이다.</h3>;
  let message2 = <h3>이것은 또 다른 전갈이다.</h3>;
  const condition = false;

  if (condition) {
    return message1;
  } else {
    return message2;
  }
}
