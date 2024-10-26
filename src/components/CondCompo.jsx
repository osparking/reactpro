import CompoFalse from "./CompoFalse";
import CompoTrue from "./CompoTrue";

export default function CondCompo() {
  const condition = true;

  return condition ? (
    <h3>콧노래를 흥얼흥얼부른다."</h3>
  ) : (
    <h3>"얼굴에 인상을 쓴다."</h3>
  );
}
