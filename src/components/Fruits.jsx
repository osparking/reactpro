export default function Fruits() {
  const fruits = ["감", "배", "밤", "대추", "포도"];
  return (
    <div>
      {fruits.map((fruit) => (
        <h3>{fruit}</h3>
      ))}
    </div>
  );
}
