import CompoFalse from "./CompoFalse";
import CompoTrue from "./CompoTrue";

export default function CondCompo() {
  const condition = false;

  return condition ? <CompoTrue /> : <CompoFalse />;
}
