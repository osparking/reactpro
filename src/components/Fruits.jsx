import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: "복숭아", price: 700, emoji: "🍑", soldout: false },
    { name: "사과", price: 1700, emoji: "🍎", soldout: true },
    { name: "망고", price: 3200, emoji: "🥭", soldout: false },
    { name: "바나나", price: 400, emoji: "🍌", soldout: true },
    { name: "파인애플", price: 3800, emoji: "🍍", soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.price}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
