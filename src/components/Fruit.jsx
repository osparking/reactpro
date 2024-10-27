export default function ({ name, price, emoji }) {
  return (
    <div>
      {price > 1000 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )}
    </div>
  );
}
