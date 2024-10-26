export default function Fruits() {
  const fruits = ["감", "배", "밤", "대추", "포도"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
