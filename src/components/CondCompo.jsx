export default function CondCompo() {
  const condition = true;
  if (condition) {
    return (
      <div>
        <h3>이 성분은 조건이 참일 때 표출된다.</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>이 성분은 조건이 거짓일 때 표출된다.</h3>
      </div>
    );
  }
}
