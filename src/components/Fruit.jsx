export default function ({ name, price, emoji }) {
  return (
    <li>
      {price > 1000 ? (
        <h3>
          {" "}
          {emoji} {name} {price}{" "}
        </h3>
      ) : (
        ""
      )}
    </li>
  );
}
