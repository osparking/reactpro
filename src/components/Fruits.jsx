import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: "복숭아", price: 700, emoji: "🍑" },
    { name: "사과", price: 1700, emoji: "🍎" },
    { name: "망고", price: 3200, emoji: "🥭" },
    { name: "바나나", price: 400, emoji: "🍌" },
    { name: "파인애플", price: 3800, emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
        ))}
      </ul>
    </div>
  );
}
