import CompoFalse from "./CompoFalse";
import CompoTrue from "./CompoTrue";

export default function CondCompo() {
  const condition = false;
  if (condition) {
    return <CompoTrue />;
  } else {
    return <CompoFalse />;
  }
}
